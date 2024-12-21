import mongoose from "mongoose";


export const connectDB = (uri: string) => {
    mongoose.connect(uri, { dbName: "graphqlDB" })
        .then((e) => console.log("mongo connected."))
        .catch((e) => console.log("mongo connection failed"))
}
