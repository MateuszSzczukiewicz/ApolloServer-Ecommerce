import { faker } from "@faker-js/faker";
import { prisma } from "@/db";
import { Product } from "@/graphql/types.generated";
import { OrderStatus } from "@prisma/client";

async function createUniqueNameAndSlug<T extends { name: string; slug: string }>(
	generateName: () => string,
	model: { findUnique: (args: { where: { slug: string } }) => Promise<T | null> },
): Promise<{ name: string; slug: string }> {
	let name = generateName();
	let slug = faker.helpers.slugify(name).toLowerCase();
	let isUnique = false;
	let attempt = 1;

	while (!isUnique) {
		const existingItem = await model.findUnique({
			where: { slug },
		});

		isUnique = !existingItem;
		if (!isUnique) {
			name = `${generateName()}-${attempt++}`;
			slug = faker.helpers.slugify(name).toLowerCase();
		}
	}

	return { name, slug };
}

const seed = async () => {
	await prisma.cartItem.deleteMany({});
	await prisma.cart.deleteMany({});
	await prisma.review.deleteMany({});
	await prisma.productImage.deleteMany({});
	await prisma.order.deleteMany({});
	await prisma.product.deleteMany({});
	await prisma.collection.deleteMany({});
	await prisma.category.deleteMany({});

	const productsCount = 200;
	const collectionsCount = 3;
	const categoriesCount = 5;

	const collections = [];
	for (let i = 0; i < collectionsCount; i++) {
		const { name, slug } = await createUniqueNameAndSlug(
			faker.commerce.department,
			prisma.collection,
		);
		const createdCollection = await prisma.collection.create({
			data: {
				name,
				slug,
				description: faker.lorem.sentence(),
			},
		});
		collections.push(createdCollection);
		console.log(`Created collection with id: ${createdCollection.id}`);
	}

	const categories = [];
	for (let i = 0; i < categoriesCount; i++) {
		const { name, slug } = await createUniqueNameAndSlug(
			faker.commerce.department,
			prisma.category,
		);
		const createdCategory = await prisma.category.create({
			data: {
				name,
				slug,
				description: faker.lorem.sentence(),
			},
		});
		categories.push(createdCategory);
		console.log(`Created category with id: ${createdCategory.id}`);
	}

	const products: Product[] = [];
	for (let i = 0; i < productsCount; i++) {
		const { name, slug } = await createUniqueNameAndSlug(
			faker.commerce.productName,
			prisma.product,
		);
		const price = faker.number.int({ min: 100, max: 1000 });
		const rating = faker.number.float({ min: 1, max: 5, fractionDigits: 1 });
		const collectionIndex = faker.number.int({ min: 0, max: collections.length - 1 });
		const categoryIndex = faker.number.int({ min: 0, max: categories.length - 1 });

		const createdProduct = await prisma.product.create({
			data: {
				name,
				slug,
				description: faker.commerce.productDescription(),
				price,
				rating,
				collections: {
					connect: {
						id: collections[collectionIndex].id,
					},
				},
				categories: {
					connect: {
						id: categories[categoryIndex].id,
					},
				},
			},
		});

		products.push(createdProduct as Product);
		console.log(`Created product with id: ${createdProduct.id}`);
	}

	for (const product of products) {
		const images = Array.from({ length: 3 }).map(() => ({
			url: faker.image.urlLoremFlickr({ category: "cats" }),
			alt: faker.lorem.words(3),
			width: 640,
			height: 480,
			productId: product.id,
		}));
		await prisma.productImage.createMany({ data: images });
		console.log(`Created ${images.length} images for product id: ${product.id}`);

		const reviews = Array.from({ length: 5 }).map(() => ({
			author: faker.person.fullName(),
			email: faker.internet.email(),
			rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
			title: faker.lorem.words(3),
			description: faker.lorem.paragraph(),
			productId: product.id,
		}));
		await prisma.review.createMany({ data: reviews });
		console.log(`Created ${reviews.length} reviews for product id: ${product.id}`);
	}

	for (let i = 0; i < 5; i++) {
		const createdCart = await prisma.cart.create({ data: {} });
		const cartItems = Array.from({ length: 3 }).map(() => {
			const productIndex = faker.number.int({ min: 0, max: products.length - 1 });
			return {
				productId: products[productIndex].id,
				quantity: 1,
				cartId: createdCart.id,
			};
		});
		await prisma.cartItem.createMany({ data: cartItems });
		console.log(`Created ${cartItems.length} cart items for cart id: ${createdCart.id}`);
	}

	for (let i = 0; i < 5; i++) {
		const status = faker.helpers.arrayElement([
			OrderStatus.PENDING,
			OrderStatus.COMPLETED,
			OrderStatus.CANCELLED,
		]);
		const lines = JSON.stringify(
			products.map((product) => ({
				productId: product.id,
				quantity: 1,
				price: product.price,
			})),
		);
		const totalAmount = products.reduce((sum, product) => sum + product.price, 0);

		const createdOrder = await prisma.order.create({
			data: {
				status,
				lines,
				totalAmount,
			},
		});
		console.log(`Created order with id: ${createdOrder.id}`);
	}
};

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
