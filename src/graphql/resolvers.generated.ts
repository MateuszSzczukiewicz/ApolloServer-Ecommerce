/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { product as Query_product } from "./../schema/resolvers/Query/product";
import { Category } from "./../schema/resolvers/Category";
import { Collection } from "./../schema/resolvers/Collection";
import { Product } from "./../schema/resolvers/Product";
import { ProductImage } from "./../schema/resolvers/ProductImage";
import { Review } from "./../schema/resolvers/Review";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: { product: Query_product },

	Category: Category,
	Collection: Collection,
	Product: Product,
	ProductImage: ProductImage,
	Review: Review,
	DateTime: DateTimeResolver,
};
