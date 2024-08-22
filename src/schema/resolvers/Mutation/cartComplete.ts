import { MutationResolvers, Order } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const cartComplete: MutationResolvers["cartComplete"] = async (
	_parent,
	{ cartId },
	_context,
) => {
	const cart = await prisma.cart.findUnique({
		where: { id: cartId },
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

	if (cart.items.length === 0) {
		throw new Error("Cannot complete an empty cart");
	}

	const order = await prisma.order.create({
		data: {
			totalAmount: cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
			status: "PENDING",
			lines: JSON.stringify(
				cart.items.map((item) => ({
					productId: item.productId,
					quantity: item.quantity,
					price: item.product.price,
				})),
			),
		},
	});

	const orderWithParsedLines = {
		...order,
		lines: JSON.parse(order.lines) as Record<string, unknown>,
	};

	await prisma.cart.delete({
		where: { id: cartId },
	});

	return orderWithParsedLines as Order;
};
