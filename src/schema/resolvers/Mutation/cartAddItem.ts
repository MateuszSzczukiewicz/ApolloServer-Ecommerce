import { Cart, MutationResolvers, Product } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const cartAddItem: NonNullable<MutationResolvers["cartAddItem"]> = async (
	_parent,
	{ id, input: { productId, quantity } },
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

	if (existingItem) {
		await prisma.cartItem.update({
			where: { id: existingItem.id },
			data: { quantity: existingItem.quantity + (quantity || 1) },
		});
	} else {
		await prisma.cartItem.create({
			data: {
				productId,
				quantity: quantity || 1,
				cartId: cart.id,
			},
		});
	}

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
