import type { OrderResolvers } from "@/graphql/types.generated";

export const Order: OrderResolvers = {
	id: ({ id }) => id,
	createdAt: ({ createdAt }) => createdAt,
	updatedAt: ({ updatedAt }) => updatedAt,
	status: ({ status }) => status,
	totalAmount: ({ totalAmount }) => totalAmount,
	lines: async ({ lines }) => {
		return lines;
	},
};
