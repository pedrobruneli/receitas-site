import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        user: {type: String, required: true},
        pass: {type: String, required: true}
    }
)

const users = mongoose.model('users', userSchema);

export default users;