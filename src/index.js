import express from "express"
import graphqlHTTP from "express-graphql"
import schema from './schema'
import {connect } from './database'

const app = express()
connect()

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(3000, () => console.log('server port 3000'))