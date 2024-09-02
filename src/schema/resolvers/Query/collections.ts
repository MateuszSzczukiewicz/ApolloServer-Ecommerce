import { CollectionList, QueryResolvers } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const collections: NonNullable<QueryResolvers["collections"]> = async (
	_parent,
	{ skip = 0, take = 10 },
	_context,
) => {
	const [collections, count] = await Promise.all([
		prisma.collection.findMany({
			skip,
			take,
		}),
		prisma.collection.count(),
	]);

	const total = await prisma.collection.count();

	return {
		data: collections,
		meta: {
			count,
			total,
		},
	} as CollectionList;
};
