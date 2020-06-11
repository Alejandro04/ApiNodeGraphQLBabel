import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

// "routes"
const typeDefs = `
    type Query {
        users: [User]
    }

    type User {
        _id: ID
        name: String!
        email: String!
    }

    type Mutation {
        createUser(input: UserInput): User
    }

    input UserInput {
        name: String!
        email: String!
    }
`


export default makeExecutableSchema({
    typeDefs,
    resolvers
})