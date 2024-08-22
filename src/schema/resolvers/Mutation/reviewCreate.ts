import { Cart, MutationResolvers, Product } from "@/graphql/types.generated";
import { prisma } from "@/db";

export const reviewCreate: NonNullable<MutationResolvers["reviewCreate"]> = async (
	_parent,
	{ author, description, email, productId, rating, title },
	_context,
) => {
	await prisma.review.create({
		data: {
			author,
			description,
			email,
			productId,
			rating,
			title,
		},
	});

	const cart = await prisma.cart.findFirst({
		where: {
			items: {
				some: {
					productId,
				},
			},
		},
		include: {
			items: {
				include: {
					product: {
						include: {
							reviews: true,
						},
					},
				},
			},
		},
	});

	if (!cart) {
		throw new Error("Cart not found");
	}

	return {
		id: cart.id,
		items: cart.items.map((item) => ({
			...item,
			product: {
				...item.product,
				reviews: item.product.reviews,
			} as Partial<Product>,
		})) as Cart["items"],
	} as Cart;
};
