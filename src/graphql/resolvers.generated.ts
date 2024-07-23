/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { product as Query_product } from "./../schema/resolvers/Query/product";
import { products as Query_products } from "./../schema/resolvers/Query/products";
import { Product } from "./../schema/resolvers/Product";
export const resolvers: Resolvers = {
	Query: { product: Query_product, products: Query_products },

	Product: Product,
};
