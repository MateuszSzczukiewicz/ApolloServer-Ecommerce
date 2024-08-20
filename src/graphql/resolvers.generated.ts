/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { product as Query_product } from "./../schema/resolvers/Query/product";
import { products as Query_products } from "./../schema/resolvers/Query/products";
import { Category } from "./../schema/resolvers/Category";
import { Collection } from "./../schema/resolvers/Collection";
import { ListMeta } from "./../schema/resolvers/ListMeta";
import { Product } from "./../schema/resolvers/Product";
import { ProductImage } from "./../schema/resolvers/ProductImage";
import { ProductList } from "./../schema/resolvers/ProductList";
import { Review } from "./../schema/resolvers/Review";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: { product: Query_product, products: Query_products },

	Category: Category,
	Collection: Collection,
	ListMeta: ListMeta,
	Product: Product,
	ProductImage: ProductImage,
	ProductList: ProductList,
	Review: Review,
	DateTime: DateTimeResolver,
};
