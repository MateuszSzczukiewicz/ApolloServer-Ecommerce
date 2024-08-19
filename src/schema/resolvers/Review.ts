import type { ReviewResolvers, Product } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const Review: ReviewResolvers = {
	product: async ({ productId }, _args, _context) => {
		const product = await prisma.product.findUnique({
			where: { id: productId },
		});
		return product as Product;
	},
	id: (parent) => parent.id,
	author: (parent) => parent.author,
	email: (parent) => parent.email,
	rating: (parent) => parent.rating,
	title: (parent) => parent.title,
	description: (parent) => parent.description,
	createdAt: (parent) => parent.createdAt,
	updatedAt: (parent) => parent.updatedAt,
	productId: (parent) => parent.productId,
};
