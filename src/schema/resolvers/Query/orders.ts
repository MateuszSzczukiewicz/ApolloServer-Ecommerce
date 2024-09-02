import { OrderList, QueryResolvers } from "../../../graphql/types.generated";
import { prisma } from "../../../db";
import { SortOrder } from "../../../types";

export const orders: NonNullable<QueryResolvers["orders"]> = async (
	_parent,
	{ order = "ASC", orderBy = "DEFAULT", skip = 0, take = 10 },
	_context,
) => {
	const sortOrder: SortOrder = order.toLowerCase() as SortOrder;

	const orderByMap: Record<string, Record<string, SortOrder>> = {
		CREATED_AT: { createdAt: sortOrder },
		TOTAL_AMOUNT: { totalAmount: sortOrder },
		STATUS: { status: sortOrder },
		DEFAULT: { createdAt: sortOrder },
	};

	const orderByClause = orderByMap[orderBy] || orderByMap["DEFAULT"];

	const [orders, count] = await Promise.all([
		prisma.order.findMany({
			orderBy: orderByClause,
			skip,
			take,
		}),
		prisma.order.count(),
	]);

	const total = await prisma.order.count();

	return {
		data: orders.map((order) => ({
			...order,
			lines: order.lines,
		})),
		meta: {
			count,
			total,
		},
	} as OrderList;
};
