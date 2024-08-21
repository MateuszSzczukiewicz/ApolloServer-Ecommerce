import { faker } from "@faker-js/faker";
import { prisma } from "@/db";

const seed = async () => {
	await prisma.cartItem.deleteMany({});
	await prisma.cart.deleteMany({});
	await prisma.review.deleteMany({});
	await prisma.productImage.deleteMany({});
	await prisma.order.deleteMany({});
	await prisma.product.deleteMany({});
	await prisma.collection.deleteMany({});
	await prisma.category.deleteMany({});

	const productsCount = 14;
	const collectionsCount = 3;
	const categoriesCount = 5;

	const collections = [];
	const categories = [];

	for (let i = 0; i < collectionsCount; i++) {
		const collectionName = faker.commerce.department();
		const createdCollection = await prisma.collection.create({
			data: {
				name: collectionName,
				slug: faker.helpers.slugify(collectionName).toLowerCase(),
				description: faker.lorem.sentence(),
			},
		});
		collections.push(createdCollection);
		console.log(`Created collection with id: ${createdCollection.id}`);
	}

	for (let i = 0; i < categoriesCount; i++) {
		const categoryName = faker.commerce.department();
		const createdCategory = await prisma.category.create({
			data: {
				name: categoryName,
				slug: faker.helpers.slugify(categoryName).toLowerCase(),
				description: faker.lorem.sentence(),
			},
		});
		categories.push(createdCategory);
		console.log(`Created category with id: ${createdCategory.id}`);
	}

	const products = [];
	for (let i = 0; i < productsCount; i++) {
		const name = faker.commerce.productName();
		const price = faker.number.int({ min: 100, max: 1000 });
		const rating = faker.number.float({ min: 1, max: 5, fractionDigits: 1 });
		const collectionIndex = faker.number.int({ min: 0, max: collections.length - 1 });
		const categoryIndex = faker.number.int({ min: 0, max: categories.length - 1 });

		const createdProduct = await prisma.product.create({
			data: {
				name,
				slug: faker.helpers.slugify(name).toLowerCase(),
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

		products.push(createdProduct);
		console.log(`Created product with id: ${createdProduct.id}`);

		for (let j = 0; j < 3; j++) {
			const createdImage = await prisma.productImage.create({
				data: {
					url: faker.image.urlLoremFlickr({ category: "fashion" }),
					alt: faker.lorem.words(3),
					width: faker.number.int(1000),
					height: faker.number.int(1000),
					productId: createdProduct.id,
				},
			});
			console.log(`Created image with id: ${createdImage.id} for product id: ${createdProduct.id}`);
		}

		for (let k = 0; k < 5; k++) {
			const createdReview = await prisma.review.create({
				data: {
					author: faker.person.fullName(),
					email: faker.internet.email(),
					rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
					title: faker.lorem.words(3),
					description: faker.lorem.paragraph(),
					productId: createdProduct.id,
				},
			});
			console.log(
				`Created review with id: ${createdReview.id} for product id: ${createdProduct.id}`,
			);
		}
	}

	for (let i = 0; i < 5; i++) {
		const createdCart = await prisma.cart.create({
			data: {},
		});
		console.log(`Created cart with id: ${createdCart.id}`);

		for (let j = 0; j < 3; j++) {
			const productIndex = faker.number.int({ min: 0, max: products.length - 1 });
			const quantity = faker.number.int({ min: 1, max: 5 });

			const createdCartItem = await prisma.cartItem.create({
				data: {
					productId: products[productIndex].id,
					quantity,
					cartId: createdCart.id,
				},
			});

			console.log(
				`Created cart item with id: ${createdCartItem.id} for cart id: ${createdCart.id} and product id: ${createdCartItem.productId}`,
			);
		}
	}

	for (let i = 0; i < 5; i++) {
		const status = faker.helpers.arrayElement(["PENDING", "COMPLETED", "CANCELLED"]);
		const lines = JSON.stringify(
			products.map((product) => ({
				productId: product.id,
				quantity: faker.number.int({ min: 1, max: 3 }),
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
