import { CategoryList, QueryResolvers } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	{ skip = 0, take = 10 },
	_context,
) => {
	const [categories, count] = await Promise.all([
		prisma.category.findMany({
			skip,
			take,
		}),
		prisma.category.count(),
	]);

	const total = await prisma.category.count();

	return {
		data: categories,
		meta: {
			count,
			total,
		},
	} as CategoryList;
};
