import type { OrderListResolvers } from "../../graphql/types.generated";

export const OrderList: OrderListResolvers = {
	data: ({ data }) => data,
	meta: ({ meta }) => meta,
};
