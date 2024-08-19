import type { CollectionResolvers, Product } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const Collection: CollectionResolvers = {
	products: async ({ id }, _args, _context) => {
		const products = await prisma.product.findMany({
			where: {
				collections: {
					some: {
						id,
					},
				},
			},
		});
		return products as Product[];
	},
	description: (parent) => parent.description,
	id: (parent) => parent.id,
	name: (parent) => parent.name,
	slug: (parent) => parent.slug,
};
