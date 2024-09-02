import { ProductList, QueryResolvers } from "../../../graphql/types.generated";
import { prisma } from "../../../db";
import { SortOrder } from "../../../types";

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	{ order = "ASC", orderBy = "DEFAULT", search = "", skip = 0, take = 10 },
	_context,
) => {
	const sortOrder: SortOrder = order.toLowerCase() as SortOrder;

	const where: Record<string, unknown> = search
		? {
				OR: [
					{ name: { contains: search, mode: "insensitive" } },
					{ description: { contains: search, mode: "insensitive" } },
				],
			}
		: {};

	const orderByMap: Record<string, Record<string, SortOrder>> = {
		NAME: { name: sortOrder },
		PRICE: { price: sortOrder },
		RATING: { rating: sortOrder },
		DEFAULT: { createdAt: sortOrder },
	};

	const orderByClause = orderByMap[orderBy] || orderByMap["DEFAULT"];

	const [products, count] = await Promise.all([
		prisma.product.findMany({
			where,
			orderBy: orderByClause,
			skip,
			take,
		}),
		prisma.product.count({ where }),
	]);

	const total = await prisma.product.count();

	return {
		data: products,
		meta: {
			count,
			total,
		},
	} as ProductList;
};
