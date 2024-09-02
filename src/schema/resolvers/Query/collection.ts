import { Collection, QueryResolvers } from "../../../graphql/types.generated";
import { prisma } from "../../../db";

export const collection: NonNullable<QueryResolvers["collection"]> = async (
	_parent,
	{ id, slug },
	_context,
) => {
	if (!id && !slug) {
		throw new Error("You must provide either 'id' or 'slug'.");
	}

	const collection = await prisma.collection.findUnique({
		where: id ? { id } : { slug: slug as string },
		include: {
			products: true,
		},
	});

	if (!collection) {
		throw new Error("Collection not found.");
	}

	return collection as Collection;
};
