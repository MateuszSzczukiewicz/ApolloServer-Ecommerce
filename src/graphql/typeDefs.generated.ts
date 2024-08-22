import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			name: { kind: "Name", value: "Query" },
			kind: "ObjectTypeDefinition",
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cart" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
					],
					type: { kind: "NamedType", name: { kind: "Name", value: "Cart" } },
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "0" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "10" },
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "CategoryList" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "category" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug" },
							type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							directives: [],
						},
					],
					type: { kind: "NamedType", name: { kind: "Name", value: "Category" } },
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collection" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug" },
							type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							directives: [],
						},
					],
					type: { kind: "NamedType", name: { kind: "Name", value: "Collection" } },
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "0" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "10" },
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "CollectionList" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Order" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "orders" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "order" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "SortDirection" } },
							},
							defaultValue: { kind: "EnumValue", value: "ASC" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderBy" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "OrderSortBy" } },
							},
							defaultValue: { kind: "EnumValue", value: "DEFAULT" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "0" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "10" },
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "OrderList" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "slug" },
							type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "order" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "SortDirection" } },
							},
							defaultValue: { kind: "EnumValue", value: "ASC" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "orderBy" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ProductSortBy" } },
							},
							defaultValue: { kind: "EnumValue", value: "DEFAULT" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "search" },
							type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "skip" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "0" },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "take" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							defaultValue: { kind: "IntValue", value: "10" },
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ProductList" } },
					},
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Cart" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "items" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "CartItem" } },
							},
						},
					},
					directives: [],
				},
			],
		},
		{
			name: { kind: "Name", value: "CartItem" },
			kind: "ObjectTypeDefinition",
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "quantity" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
		{
			name: { kind: "Name", value: "Mutation" },
			kind: "ObjectTypeDefinition",
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cartAddItem" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "input" },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "MutationCartAddItemInput" },
								},
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Cart" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cartChangeItemQuantity" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "quantity" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Cart" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cartComplete" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "cartId" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "userEmail" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Order" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cartFindOrCreate" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "input" },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: { kind: "Name", value: "MutationCartFindOrCreateInput" },
								},
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Cart" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cartRemoveItem" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Cart" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "reviewCreate" },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "author" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "description" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "email" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "productId" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "rating" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
							},
							directives: [],
						},
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "title" },
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
							directives: [],
						},
					],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Cart" } },
					},
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
		{
			kind: "InputObjectTypeDefinition",
			name: { kind: "Name", value: "MutationCartAddItemInput" },
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "productId" },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "quantity" },
					type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					defaultValue: { kind: "IntValue", value: "1" },
					directives: [],
				},
			],
		},
		{
			kind: "InputObjectTypeDefinition",
			name: { kind: "Name", value: "MutationCartFindOrCreateInput" },
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "items" },
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: { kind: "NamedType", name: { kind: "Name", value: "CartItemInput" } },
						},
					},
					directives: [],
				},
			],
		},
		{
			kind: "InputObjectTypeDefinition",
			name: { kind: "Name", value: "CartItemInput" },
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "productId" },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "quantity" },
					type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					defaultValue: { kind: "IntValue", value: "1" },
					directives: [],
				},
			],
		},
		{
			name: { kind: "Name", value: "ListMeta" },
			kind: "ObjectTypeDefinition",
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CategoryList" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Category" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ListMeta" } },
					},
					directives: [],
				},
			],
		},
		{
			name: { kind: "Name", value: "Category" },
			kind: "ObjectTypeDefinition",
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
							},
						},
					},
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
		{
			name: { kind: "Name", value: "Collection" },
			kind: "ObjectTypeDefinition",
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "products" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
							},
						},
					},
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CollectionList" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Collection" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ListMeta" } },
					},
					directives: [],
				},
			],
		},
		{ kind: "ScalarTypeDefinition", name: { kind: "Name", value: "JSON" }, directives: [] },
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "status" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "OrderStatus" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "totalAmount" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "lines" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "JSON" } },
					},
					directives: [],
				},
			],
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderStatus" },
			directives: [],
			values: [
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "PENDING" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "COMPLETED" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "CANCELLED" }, directives: [] },
			],
		},
		{
			name: { kind: "Name", value: "SortDirection" },
			kind: "EnumTypeDefinition",
			directives: [],
			values: [
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "ASC" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "DESC" }, directives: [] },
			],
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "OrderSortBy" },
			directives: [],
			values: [
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "DEFAULT" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "NAME" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "PRICE" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "RATING" }, directives: [] },
			],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderList" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Order" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ListMeta" } },
					},
					directives: [],
				},
			],
		},
		{ kind: "ScalarTypeDefinition", name: { kind: "Name", value: "DateTime" }, directives: [] },
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating" },
					arguments: [],
					type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "images" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "ProductImage" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "reviews" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Review" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "categories" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Category" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "collections" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Collection" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
					},
					directives: [],
				},
			],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductImage" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "alt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "height" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
			],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "author" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "email" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "rating" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "description" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "createdAt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "updatedAt" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "productId" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
					},
					directives: [],
				},
			],
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "ProductSortBy" },
			directives: [],
			values: [
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "DEFAULT" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "NAME" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "PRICE" }, directives: [] },
				{ kind: "EnumValueDefinition", name: { kind: "Name", value: "RATING" }, directives: [] },
			],
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "ProductList" },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "data" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
							},
						},
					},
					directives: [],
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "meta" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "ListMeta" } },
					},
					directives: [],
				},
			],
		},
		{
			kind: "SchemaDefinition",
			operationTypes: [
				{
					kind: "OperationTypeDefinition",
					type: { kind: "NamedType", name: { kind: "Name", value: "Query" } },
					operation: "query",
				},
				{
					kind: "OperationTypeDefinition",
					type: { kind: "NamedType", name: { kind: "Name", value: "Mutation" } },
					operation: "mutation",
				},
			],
		},
	],
} as unknown as DocumentNode;
