import type { CollectionListResolvers } from "../../graphql/types.generated";

export const CollectionList: CollectionListResolvers = {
	data: ({ data }) => data,
	meta: ({ meta }) => meta,
};
