import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { typeDefs } from "./schema/schema";
import { AppointmentsResolvers } from "./modules/appointments/appointments.resolver";
import { env } from "./config/environment";

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers: { ...AppointmentsResolvers },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(env.PORT, () => console.log(`🚀 Server running on http://localhost:${env.PORT}/graphql`));
}

startServer();
