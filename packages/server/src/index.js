import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import session from "express-session";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import sessionStore from "connect-session-sequelize";
import { dbConnection } from "./connection.js";

const app = express();
const httpServer = http.createServer(app);

app.set("trust proxy", 1); // trust the proxy (NGINX in this case)

const SequelizeStore = sessionStore(session.Store);
const store = new SequelizeStore({
  db: dbConnection,
});

store.sync();

app.use(
  session({
    secret: "SUPER_SECRET",
    resave: true,
    saveUninitialized: false,
    store,
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req }) => {
    if (!req.session) return;
    const { session } = req;
    const { user } = session;
    return { session, user };
  },
});

await server.start();

server.applyMiddleware({
  app,
  path: "/",
});

httpServer.listen({ port: 4000 });

console.log(`🚀 Server up and listening on port 4000 `);
