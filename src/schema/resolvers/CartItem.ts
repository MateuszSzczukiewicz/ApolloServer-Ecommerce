import type { CartItemResolvers, Product } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const CartItem: CartItemResolvers = {
	product: async ({ product: { id } }) => {
		const product = await prisma.product.findUnique({
			where: { id: id },
		});
		return product as Product;
	},
	quantity: ({ quantity }) => quantity,
};
