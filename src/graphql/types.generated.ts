import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
	JSON: { input: Record<string, unknown>; output: Record<string, unknown> };
};

export type Cart = {
	__typename?: "Cart";
	id: Scalars["ID"]["output"];
	items: Array<CartItem>;
};

export type CartItem = {
	__typename?: "CartItem";
	id: Scalars["ID"]["output"];
	product: Product;
	productId: Scalars["String"]["output"];
	quantity: Scalars["Int"]["output"];
};

export type CartItemInput = {
	productId: Scalars["String"]["input"];
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Category = {
	__typename?: "Category";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CategoryList = {
	__typename?: "CategoryList";
	data: Array<Category>;
	meta: ListMeta;
};

export type Collection = {
	__typename?: "Collection";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CollectionList = {
	__typename?: "CollectionList";
	data: Array<Collection>;
	meta: ListMeta;
};

export type ListMeta = {
	__typename?: "ListMeta";
	count: Scalars["Int"]["output"];
	total: Scalars["Int"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	cartAddItem: Cart;
	cartChangeItemQuantity: Cart;
	cartFindOrCreate: Cart;
	cartRemoveItem: Cart;
	reviewCreate: Cart;
};

export type MutationcartAddItemArgs = {
	id: Scalars["ID"]["input"];
	input: MutationCartAddItemInput;
};

export type MutationcartChangeItemQuantityArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type MutationcartFindOrCreateArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	input: MutationCartFindOrCreateInput;
};

export type MutationcartRemoveItemArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
};

export type MutationreviewCreateArgs = {
	author: Scalars["String"]["input"];
	description: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
};

export type MutationCartAddItemInput = {
	productId: Scalars["String"]["input"];
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationCartFindOrCreateInput = {
	items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
	__typename?: "Order";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lines: Scalars["JSON"]["output"];
	status: OrderStatus;
	totalAmount: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderList = {
	__typename?: "OrderList";
	data: Array<Order>;
	meta: ListMeta;
};

export type OrderSortBy = "DEFAULT" | "NAME" | "PRICE" | "RATING";

export type OrderStatus = "CANCELLED" | "COMPLETED" | "PENDING";

export type Product = {
	__typename?: "Product";
	categories: Array<Category>;
	collections: Array<Collection>;
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images: Array<ProductImage>;
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	rating?: Maybe<Scalars["Float"]["output"]>;
	reviews: Array<Review>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ProductImage = {
	__typename?: "ProductImage";
	alt: Scalars["String"]["output"];
	height: Scalars["Int"]["output"];
	id: Scalars["ID"]["output"];
	product: Product;
	productId: Scalars["ID"]["output"];
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type ProductList = {
	__typename?: "ProductList";
	data: Array<Product>;
	meta: ListMeta;
};

export type ProductSortBy = "DEFAULT" | "NAME" | "PRICE" | "RATING";

export type Query = {
	__typename?: "Query";
	cart?: Maybe<Cart>;
	categories: CategoryList;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections: CollectionList;
	order: Order;
	orders: OrderList;
	product: Product;
	products: ProductList;
};

export type QuerycartArgs = {
	id: Scalars["ID"]["input"];
};

export type QuerycategoriesArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QuerycategoryArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerycollectionArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerycollectionsArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryorderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryordersArgs = {
	email: Scalars["String"]["input"];
	order?: SortDirection;
	orderBy?: OrderSortBy;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryproductArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryproductsArgs = {
	order?: SortDirection;
	orderBy?: ProductSortBy;
	search?: InputMaybe<Scalars["String"]["input"]>;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type Review = {
	__typename?: "Review";
	author: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	product: Product;
	productId: Scalars["ID"]["output"];
	rating: Scalars["Float"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type SortDirection = "ASC" | "DESC";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Cart: ResolverTypeWrapper<Cart>;
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	CartItem: ResolverTypeWrapper<CartItem>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	CartItemInput: CartItemInput;
	Category: ResolverTypeWrapper<Category>;
	CategoryList: ResolverTypeWrapper<CategoryList>;
	Collection: ResolverTypeWrapper<Collection>;
	CollectionList: ResolverTypeWrapper<CollectionList>;
	DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
	JSON: ResolverTypeWrapper<Scalars["JSON"]["output"]>;
	ListMeta: ResolverTypeWrapper<ListMeta>;
	Mutation: ResolverTypeWrapper<{}>;
	MutationCartAddItemInput: MutationCartAddItemInput;
	MutationCartFindOrCreateInput: MutationCartFindOrCreateInput;
	Order: ResolverTypeWrapper<Omit<Order, "status"> & { status: ResolversTypes["OrderStatus"] }>;
	OrderList: ResolverTypeWrapper<
		Omit<OrderList, "data"> & { data: Array<ResolversTypes["Order"]> }
	>;
	OrderSortBy: ResolverTypeWrapper<"DEFAULT" | "NAME" | "PRICE" | "RATING">;
	OrderStatus: ResolverTypeWrapper<"PENDING" | "COMPLETED" | "CANCELLED">;
	Product: ResolverTypeWrapper<Product>;
	Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
	ProductImage: ResolverTypeWrapper<ProductImage>;
	ProductList: ResolverTypeWrapper<ProductList>;
	ProductSortBy: ResolverTypeWrapper<"DEFAULT" | "NAME" | "PRICE" | "RATING">;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Review>;
	SortDirection: ResolverTypeWrapper<"ASC" | "DESC">;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Cart: Cart;
	ID: Scalars["ID"]["output"];
	CartItem: CartItem;
	String: Scalars["String"]["output"];
	Int: Scalars["Int"]["output"];
	CartItemInput: CartItemInput;
	Category: Category;
	CategoryList: CategoryList;
	Collection: Collection;
	CollectionList: CollectionList;
	DateTime: Scalars["DateTime"]["output"];
	JSON: Scalars["JSON"]["output"];
	ListMeta: ListMeta;
	Mutation: {};
	MutationCartAddItemInput: MutationCartAddItemInput;
	MutationCartFindOrCreateInput: MutationCartFindOrCreateInput;
	Order: Order;
	OrderList: Omit<OrderList, "data"> & { data: Array<ResolversParentTypes["Order"]> };
	Product: Product;
	Float: Scalars["Float"]["output"];
	ProductImage: ProductImage;
	ProductList: ProductList;
	Query: {};
	Review: Review;
	Boolean: Scalars["Boolean"]["output"];
};

export type CartResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Cart"] = ResolversParentTypes["Cart"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	items?: Resolver<Array<ResolversTypes["CartItem"]>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["CartItem"] = ResolversParentTypes["CartItem"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	productId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryListResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["CategoryList"] = ResolversParentTypes["CategoryList"],
> = {
	data?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["ListMeta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["CollectionList"] = ResolversParentTypes["CollectionList"],
> = {
	data?: Resolver<Array<ResolversTypes["Collection"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["ListMeta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
	name: "JSON";
}

export type ListMetaResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["ListMeta"] = ResolversParentTypes["ListMeta"],
> = {
	count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	cartAddItem?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcartAddItemArgs, "id" | "input">
	>;
	cartChangeItemQuantity?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcartChangeItemQuantityArgs, "id" | "productId" | "quantity">
	>;
	cartFindOrCreate?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcartFindOrCreateArgs, "input">
	>;
	cartRemoveItem?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcartRemoveItemArgs, "id" | "productId">
	>;
	reviewCreate?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<
			MutationreviewCreateArgs,
			"author" | "description" | "email" | "productId" | "rating" | "title"
		>
	>;
};

export type OrderResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	lines?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
	status?: Resolver<ResolversTypes["OrderStatus"], ParentType, ContextType>;
	totalAmount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderListResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["OrderList"] = ResolversParentTypes["OrderList"],
> = {
	data?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["ListMeta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderSortByResolvers = EnumResolverSignature<
	{ DEFAULT?: any; NAME?: any; PRICE?: any; RATING?: any },
	ResolversTypes["OrderSortBy"]
>;

export type OrderStatusResolvers = EnumResolverSignature<
	{ CANCELLED?: any; COMPLETED?: any; PENDING?: any },
	ResolversTypes["OrderStatus"]
>;

export type ProductResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	categories?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
	collections?: Resolver<Array<ResolversTypes["Collection"]>, ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	images?: Resolver<Array<ResolversTypes["ProductImage"]>, ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	rating?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	reviews?: Resolver<Array<ResolversTypes["Review"]>, ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["ProductImage"] = ResolversParentTypes["ProductImage"],
> = {
	alt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	height?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	productId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	width?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["ProductList"] = ResolversParentTypes["ProductList"],
> = {
	data?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
	meta?: Resolver<ResolversTypes["ListMeta"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSortByResolvers = EnumResolverSignature<
	{ DEFAULT?: any; NAME?: any; PRICE?: any; RATING?: any },
	ResolversTypes["ProductSortBy"]
>;

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	cart?: Resolver<
		Maybe<ResolversTypes["Cart"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycartArgs, "id">
	>;
	categories?: Resolver<
		ResolversTypes["CategoryList"],
		ParentType,
		ContextType,
		RequireFields<QuerycategoriesArgs, "skip" | "take">
	>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		Partial<QuerycategoryArgs>
	>;
	collection?: Resolver<
		Maybe<ResolversTypes["Collection"]>,
		ParentType,
		ContextType,
		Partial<QuerycollectionArgs>
	>;
	collections?: Resolver<
		ResolversTypes["CollectionList"],
		ParentType,
		ContextType,
		RequireFields<QuerycollectionsArgs, "skip" | "take">
	>;
	order?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	orders?: Resolver<
		ResolversTypes["OrderList"],
		ParentType,
		ContextType,
		RequireFields<QueryordersArgs, "email" | "order" | "orderBy" | "skip" | "take">
	>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType, Partial<QueryproductArgs>>;
	products?: Resolver<
		ResolversTypes["ProductList"],
		ParentType,
		ContextType,
		RequireFields<QueryproductsArgs, "order" | "orderBy" | "skip" | "take">
	>;
};

export type ReviewResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
	author?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	productId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortDirectionResolvers = EnumResolverSignature<
	{ ASC?: any; DESC?: any },
	ResolversTypes["SortDirection"]
>;

export type Resolvers<ContextType = any> = {
	Cart?: CartResolvers<ContextType>;
	CartItem?: CartItemResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	CategoryList?: CategoryListResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	CollectionList?: CollectionListResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	JSON?: GraphQLScalarType;
	ListMeta?: ListMetaResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderList?: OrderListResolvers<ContextType>;
	OrderSortBy?: OrderSortByResolvers;
	OrderStatus?: OrderStatusResolvers;
	Product?: ProductResolvers<ContextType>;
	ProductImage?: ProductImageResolvers<ContextType>;
	ProductList?: ProductListResolvers<ContextType>;
	ProductSortBy?: ProductSortByResolvers;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
	SortDirection?: SortDirectionResolvers;
};
