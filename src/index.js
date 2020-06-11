import express from "express"
import graphqlHTTP from "express-graphql"

const app = express()

const schema = {}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(3000, () => console.log('server port 3000'))