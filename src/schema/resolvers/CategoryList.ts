import type { CategoryListResolvers } from "@/graphql/types.generated";

export const CategoryList: CategoryListResolvers = {
	data: ({ data }) => data,
	meta: ({ meta }) => meta,
};
