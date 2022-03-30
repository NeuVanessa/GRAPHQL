import "reflect-metadata";

import path from "path";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "./src/resolvers/UserResolver";
import { buildSchema } from "type-graphql";

async function main() {
  const schema = await buildSchema({
    //basicamente é as rotas da aplicação
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();
  console.log(`Server running on ${url}`);
}

main();
