import { Order, QueryResolvers } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const order: NonNullable<QueryResolvers["order"]> = async (_parent, { id }, _context) => {
	const order = await prisma.order.findUnique({
		where: { id },
	});

	if (!order) {
		throw new Error("Order not found.");
	}

	return {
		...order,
		lines: order.lines,
	} as Order;
};
