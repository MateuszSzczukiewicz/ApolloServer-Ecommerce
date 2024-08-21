import type { CartItem, CartResolvers } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const Cart: CartResolvers = {
	id: ({ id }) => id,
	items: async ({ id }) => {
		const items = await prisma.cartItem.findMany({
			where: { cartId: id },
			include: {
				product: true,
			},
		});

		return items.map((item) => ({
			product: {
				id: item.product.id,
				name: item.product.name,
				price: item.product.price,
			},
			quantity: item.quantity,
		})) as CartItem[];
	},
};
