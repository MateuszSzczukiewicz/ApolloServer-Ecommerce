import { Product, QueryResolvers } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	{ id, slug },
	_ctx,
) => {
	if (!id && !slug) {
		throw new Error("You must provide either 'id' or 'slug'.");
	}

	const product = await prisma.product.findUnique({
		where: id ? { id } : { slug: slug as string },
		include: {
			collections: true,
			images: true,
			categories: true,
			reviews: true,
		},
	});

	if (!product) {
		throw new Error("Product not found.");
	}

	return product as Product;
};
