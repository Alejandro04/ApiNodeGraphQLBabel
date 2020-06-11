//"controllers"
import User from "./models/User"

export const resolvers = {
    Query: {
        async users() {
            return await User.find()
        }
    },
    Mutation: {
        async createUser(_, { input }){
            const newUser = new User(input)
            await newUser.save()
            return newUser
        }
    }
}