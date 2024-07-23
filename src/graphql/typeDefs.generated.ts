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
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product" },
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
					name: { kind: "Name", value: "price" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
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
					name: { kind: "Name", value: "images" },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
							},
						},
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
