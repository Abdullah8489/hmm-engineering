const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: [true, "email already exists"],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: [true, "email already exists"],
        required: true,
    }
})
module.exports = mongoose.model("User", userSchema);