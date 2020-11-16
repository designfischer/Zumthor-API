import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    },
    description: String,
    thumbnail: String,    
    features: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
    }
})

export default mongoose.model<IProjectModel>('Project', Schema)

interface IProjectModel extends mongoose.Document {
    userId: string,
    title: string,
    stage: string,
    description?: string,
    thumbnail?: string,    
    features?: string
}