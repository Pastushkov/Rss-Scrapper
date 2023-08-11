import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true }
})

export default mongoose.model('User', UserSchema)