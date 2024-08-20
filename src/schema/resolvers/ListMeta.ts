import type { ListMetaResolvers } from "./../../graphql/types.generated";
export const ListMeta: ListMetaResolvers = {
	count: (parent) => parent.count,
	total: (parent) => parent.total,
};
