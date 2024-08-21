import type { ReviewResolvers, Product } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const Review: ReviewResolvers = {
	product: async ({ productId }, _args, _context) => {
		const product = await prisma.product.findUnique({
			where: { id: productId },
		});
		return product as Product;
	},
	id: ({ id }) => id,
	author: ({ author }) => author,
	email: ({ email }) => email,
	rating: ({ rating }) => rating,
	title: ({ title }) => title,
	description: ({ description }) => description,
	createdAt: ({ createdAt }) => createdAt,
	updatedAt: ({ updatedAt }) => updatedAt,
	productId: ({ productId }) => productId,
};
