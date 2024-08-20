import type { ProductListResolvers } from "./../../graphql/types.generated";
export const ProductList: ProductListResolvers = {
	data: (parent) => parent.data,
	meta: (parent) => parent.meta,
};
