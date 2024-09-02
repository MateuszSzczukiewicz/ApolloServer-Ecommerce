import { Cart, MutationResolvers, Product } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const cartFindOrCreate: NonNullable<MutationResolvers["cartFindOrCreate"]> = async (
	_parent,
	{ id, input },
	_context,
) => {
	let cart;

	if (id) {
		cart = await prisma.cart.findUnique({
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
	} else {
		cart = await prisma.cart.create({
			data: {},
			include: {
				items: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	if (input.items) {
		for (const item of input.items) {
			const existingItem = cart.items.find((cartItem) => cartItem.productId === item.productId);

			if (existingItem) {
				await prisma.cartItem.update({
					where: { id: existingItem.id },
					data: { quantity: existingItem.quantity + (item.quantity || 1) },
				});
			} else {
				await prisma.cartItem.create({
					data: {
						productId: item.productId,
						quantity: item.quantity || 1,
						cartId: cart.id,
					},
				});
			}
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
	}

	if (!cart) {
		throw new Error("Cart not found");
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
