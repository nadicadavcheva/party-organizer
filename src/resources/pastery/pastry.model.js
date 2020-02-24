import mongoose from 'mongoose'

const pastrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
      required: true
        },
        size: {
            type: Number
        },
        ingredients: {
            type: String
        },
        allergens: {
            type: String
        }

    },
    { timestamps: true }
)
export const Pastry = mongoose.model('pastry', pastrySchema);