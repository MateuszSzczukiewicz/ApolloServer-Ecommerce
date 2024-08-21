import type { ProductListResolvers } from "./../../graphql/types.generated";
export const ProductList: ProductListResolvers = {
	data: ({ data }) => data,
	meta: ({ meta }) => meta,
};
