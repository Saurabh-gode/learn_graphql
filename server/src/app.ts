import dotenv from 'dotenv'
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from './graphql/schema/schema';
import { connectDB } from './database';
import { getUserById, getUserByIdWrapper, getUsers } from './controllers';
import User from './models/Users';

dotenv.config({ path: './.env', });

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb://127.0.0.1:27017'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: () => "hello world.",
      users: getUsers,
      user: getUserByIdWrapper,
    },
    User: {
      manager: getUserById
    }
  }
})

connectDB(mongoURI);

startStandaloneServer(server, {
  listen: { port: Number(port) }
}).then(() => {
  console.log(`server is working ${port} in ${envMode}`)
})