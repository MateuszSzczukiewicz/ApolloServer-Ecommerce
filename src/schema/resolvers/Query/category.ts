import { Category, QueryResolvers } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const category: NonNullable<QueryResolvers["category"]> = async (
	_parent,
	{ id, slug },
	_context,
) => {
	if (!id && !slug) {
		throw new Error("You must provide either 'id' or 'slug'.");
	}

	const category = await prisma.category.findUnique({
		where: id ? { id } : { slug: slug as string },
		include: {
			products: true,
		},
	});

	if (!category) {
		throw new Error("Category not found.");
	}

	return category as Category;
};
