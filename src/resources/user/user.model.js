import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({}, { timestamps: true })
export const User = mongoose.model('user', userSchema)