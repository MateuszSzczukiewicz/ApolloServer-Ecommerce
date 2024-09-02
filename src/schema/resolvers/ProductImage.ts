import type { ProductImageResolvers, Product } from "../../graphql/types.generated";
import { prisma } from "../../db";

export const ProductImage: ProductImageResolvers = {
	product: async ({ productId }, _args, _context) => {
		const product = await prisma.product.findUnique({
			where: { id: productId },
		});
		return product as Product;
	},
	id: ({ id }) => id,
	url: ({ url }) => url,
	alt: ({ alt }) => alt,
	width: ({ width }) => width,
	height: ({ height }) => height,
	productId: ({ productId }) => productId,
};
