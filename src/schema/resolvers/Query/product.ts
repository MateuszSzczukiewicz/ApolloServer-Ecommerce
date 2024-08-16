import { QueryResolvers } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const products: NonNullable<QueryResolvers["product"]> = async (_parent, args, _ctx) => {
	const { id, slug } = args;

	if (!id && !slug) {
		throw new Error("You must provide either 'id' or 'slug'.");
	}

	const product = await prisma.product.findUnique({
		where: id ? { id } : { slug: slug as string },
		include: {
			images: true,
			reviews: true,
			categories: true,
			collections: true,
		},
	});

	if (!product) {
		throw new Error("Product not found.");
	}

	return product;
};
export const product: NonNullable<QueryResolvers["product"]> = async (_parent, _arg, _ctx) => {
	/* Implement Query.product resolver logic here */
};
