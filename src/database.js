import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongographql', {
            useNewUrlParser: true
        })

        console.log("db connect")
    } catch(e) {
        console.log("error al conectar")
        console.log(e)
    }
}