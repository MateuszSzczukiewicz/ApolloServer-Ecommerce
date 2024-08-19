import type {
	Category,
	Collection,
	ProductImage,
	ProductResolvers,
	Review,
} from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const Product: ProductResolvers = {
	collections: async ({ id }, _args, _context) => {
		const collections = await prisma.collection.findMany({
			where: {
				products: {
					some: {
						id,
					},
				},
			},
		});
		return collections as Collection[];
	},
	categories: async ({ id }, _args, _context) => {
		const categories = await prisma.category.findMany({
			where: {
				products: {
					some: {
						id,
					},
				},
			},
		});
		return categories as Category[];
	},
	images: async ({ id }, _args, _context) => {
		const images = await prisma.productImage.findMany({
			where: {
				productId: id,
			},
		});
		return images as ProductImage[];
	},
	reviews: async ({ id }, _args, _context) => {
		const reviews = await prisma.review.findMany({
			where: {
				productId: id,
			},
		});
		return reviews as Review[];
	},
	createdAt: (parent) => parent.createdAt,
	description: (parent) => parent.description,
	id: (parent) => parent.id,
	name: (parent) => parent.name,
	price: (parent) => parent.price,
	rating: (parent) => parent.rating,
	slug: (parent) => parent.slug,
	updatedAt: (parent) => parent.updatedAt,
};
