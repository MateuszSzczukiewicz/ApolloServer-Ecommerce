import { Cart, QueryResolvers } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const cart: NonNullable<QueryResolvers["cart"]> = async (_parent, { id }, _context) => {
	if (!id) {
		throw new Error("You must provide 'id'.");
	}

	const cart = await prisma.cart.findUnique({
		where: { id },
	});

	if (!cart) {
		throw new Error("Cart not found.");
	}

	return cart as Cart;
};
