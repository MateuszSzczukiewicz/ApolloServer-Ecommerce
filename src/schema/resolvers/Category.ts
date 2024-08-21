import type { CategoryResolvers, Product } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const Category: CategoryResolvers = {
	products: async ({ id }, _args, _context) => {
		const products = await prisma.product.findMany({
			where: {
				categories: {
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
