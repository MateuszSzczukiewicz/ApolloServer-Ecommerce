import { Cart, QueryResolvers } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const cart: NonNullable<QueryResolvers["cart"]> = async (_parent, { id }, _context) => {
	const cart = await prisma.cart.findUnique({
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
		throw new Error("Cart not found.");
	}

	return cart as Cart;
};
