import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{ kind: "ScalarTypeDefinition", name: { kind: "Name", value: "DateTime" }, directives: [] },
		{
			name: { kind: "Name", value: "Query" },
			kind: "ObjectTypeDefinition",
			fields: [
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
					type: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
					directives: [],
				},
			],
			directives: [],
			interfaces: [],
		},
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
			name: { kind: "Name", value: "Category" },
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
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection" },
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
			],
		},
	],
} as unknown as DocumentNode;
