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
	description: ({ description }) => description,
	id: ({ id }) => id,
	name: ({ name }) => name,
	slug: ({ slug }) => slug,
};
