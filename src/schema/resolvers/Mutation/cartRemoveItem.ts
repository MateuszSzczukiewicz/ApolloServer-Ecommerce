import { Cart, MutationResolvers, Product } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const cartRemoveItem: NonNullable<MutationResolvers["cartRemoveItem"]> = async (
	_parent,
	{ id, productId },
	_context,
) => {
	let cart = await prisma.cart.findUnique({
		where: { id },
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},
	});

	if (!cart) {
		throw new Error("Cart not found");
	}

	const existingItem = cart.items.find((cartItem) => cartItem.productId === productId);

	if (!existingItem) {
		throw new Error("Item not found in cart");
	}

	await prisma.cartItem.delete({
		where: { id: existingItem.id },
	});

	cart = await prisma.cart.findUnique({
		where: { id: cart.id },
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},
	});

	if (!cart) {
		throw new Error("Cart not found after update");
	}

	return {
		...cart,
		id: cart.id,
		items: cart.items.map((item) => ({
			...item,
			product: {
				...item.product,
			} as Partial<Product>,
		})) as Cart["items"],
	};
};
