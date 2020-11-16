import mongoose from 'mongoose'

interface IUserModel extends mongoose.Document {
    email: string
}

const Schema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    thumbnail: String
})

export default mongoose.model<IUserModel>('User', Schema)