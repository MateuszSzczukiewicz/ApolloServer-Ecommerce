import type { ListMetaResolvers } from "../../graphql/types.generated";
export const ListMeta: ListMetaResolvers = {
	count: ({ count }) => count,
	total: ({ total }) => total,
};
