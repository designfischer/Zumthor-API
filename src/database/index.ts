import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL!

export function connectToDatabase() {
    mongoose.connect(mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }, () => console.log('Connected to dabatase'))
}