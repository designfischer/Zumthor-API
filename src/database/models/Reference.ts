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
    description: String,
    thumbnail: String,    
    features: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
    }  
})

export default mongoose.model<IReferenceModel>('Reference', Schema)

interface IReferenceModel extends mongoose.Document {
    userId: string,
    title: string,
    description?: string,
    thumbnail?: string,    
    features?: string
}