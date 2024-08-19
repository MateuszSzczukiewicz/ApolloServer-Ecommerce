import type { ProductImageResolvers, Product } from "./../../graphql/types.generated";
import { prisma } from "@/db";

export const ProductImage: ProductImageResolvers = {
	product: async ({ productId }, _args, _context) => {
		const product = await prisma.product.findUnique({
			where: { id: productId },
		});
		return product as Product;
	},
	id: (parent) => parent.id,
	url: (parent) => parent.url,
	alt: (parent) => parent.alt,
	width: (parent) => parent.width,
	height: (parent) => parent.height,
	productId: (parent) => parent.productId,
};
