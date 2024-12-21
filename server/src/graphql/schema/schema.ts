export const schema = `#graphql

type User {
    _id: ID!,
    name: String!,
    email: String!,
    manager: User!,
    password: String,
    googleId: String,
    role: String!,
    avatar: String!,
    verified: String!,
    createdAt: String!,
    updatedAt: String!,

}

type Query {
    hello: String,
    users: [User],
    user(id: ID!): User
}

`;