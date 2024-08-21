/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { cart as Query_cart } from "./../schema/resolvers/Query/cart";
import { categories as Query_categories } from "./../schema/resolvers/Query/categories";
import { category as Query_category } from "./../schema/resolvers/Query/category";
import { collection as Query_collection } from "./../schema/resolvers/Query/collection";
import { collections as Query_collections } from "./../schema/resolvers/Query/collections";
import { order as Query_order } from "./../schema/resolvers/Query/order";
import { orders as Query_orders } from "./../schema/resolvers/Query/orders";
import { product as Query_product } from "./../schema/resolvers/Query/product";
import { products as Query_products } from "./../schema/resolvers/Query/products";
import { cartAddItem as Mutation_cartAddItem } from "./../schema/resolvers/Mutation/cartAddItem";
import { cartChangeItemQuantity as Mutation_cartChangeItemQuantity } from "./../schema/resolvers/Mutation/cartChangeItemQuantity";
import { cartFindOrCreate as Mutation_cartFindOrCreate } from "./../schema/resolvers/Mutation/cartFindOrCreate";
import { cartRemoveItem as Mutation_cartRemoveItem } from "./../schema/resolvers/Mutation/cartRemoveItem";
import { Cart } from "./../schema/resolvers/Cart";
import { CartItem } from "./../schema/resolvers/CartItem";
import { Category } from "./../schema/resolvers/Category";
import { CategoryList } from "./../schema/resolvers/CategoryList";
import { Collection } from "./../schema/resolvers/Collection";
import { CollectionList } from "./../schema/resolvers/CollectionList";
import { ListMeta } from "./../schema/resolvers/ListMeta";
import { Order } from "./../schema/resolvers/Order";
import { OrderList } from "./../schema/resolvers/OrderList";
import { Product } from "./../schema/resolvers/Product";
import { ProductImage } from "./../schema/resolvers/ProductImage";
import { ProductList } from "./../schema/resolvers/ProductList";
import { Review } from "./../schema/resolvers/Review";
import { DateTimeResolver, JSONResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: {
		cart: Query_cart,
		categories: Query_categories,
		category: Query_category,
		collection: Query_collection,
		collections: Query_collections,
		order: Query_order,
		orders: Query_orders,
		product: Query_product,
		products: Query_products,
	},
	Mutation: {
		cartAddItem: Mutation_cartAddItem,
		cartChangeItemQuantity: Mutation_cartChangeItemQuantity,
		cartFindOrCreate: Mutation_cartFindOrCreate,
		cartRemoveItem: Mutation_cartRemoveItem,
	},

	Cart: Cart,
	CartItem: CartItem,
	Category: Category,
	CategoryList: CategoryList,
	Collection: Collection,
	CollectionList: CollectionList,
	ListMeta: ListMeta,
	Order: Order,
	OrderList: OrderList,
	Product: Product,
	ProductImage: ProductImage,
	ProductList: ProductList,
	Review: Review,
	DateTime: DateTimeResolver,
	JSON: JSONResolver,
};
