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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Category = {
	__typename?: "Category";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type Collection = {
	__typename?: "Collection";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

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
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type Query = {
	__typename?: "Query";
	product?: Maybe<Product>;
};

export type QueryproductArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type Review = {
	__typename?: "Review";
	author: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	rating: Scalars["Float"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

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
	Category: ResolverTypeWrapper<Category>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	Collection: ResolverTypeWrapper<Collection>;
	DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
	Product: ResolverTypeWrapper<Product>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
	ProductImage: ResolverTypeWrapper<ProductImage>;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Review>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Category: Category;
	String: Scalars["String"]["output"];
	ID: Scalars["ID"]["output"];
	Collection: Collection;
	DateTime: Scalars["DateTime"]["output"];
	Product: Product;
	Int: Scalars["Int"]["output"];
	Float: Scalars["Float"]["output"];
	ProductImage: ProductImage;
	Query: {};
	Review: Review;
	Boolean: Scalars["Boolean"]["output"];
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

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

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
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	width?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		Partial<QueryproductArgs>
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
	rating?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Product?: ProductResolvers<ContextType>;
	ProductImage?: ProductImageResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
};
