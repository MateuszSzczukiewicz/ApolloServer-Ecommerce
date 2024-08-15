import { QueryResolvers } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const product: NonNullable<QueryResolvers["product"]> = async (_parent, arg, _ctx) => {
	const product = await prisma.product.findUnique({
		where: {
			id: arg.id,
		},
	});
	return product;
};
