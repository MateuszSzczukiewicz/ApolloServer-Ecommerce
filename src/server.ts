import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "@/graphql/typeDefs.generated.js";
import { resolvers } from "@/graphql/resolvers.generated.js";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const port = Number(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, {
	listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
