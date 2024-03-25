const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
        lowercase: true,
    },
    lastName: {
        type:String,
        required: true,
        lowercase: true,
    },
    email: {
        type:String,
        required: true,
        lowercase: true,
        trim: true,
    },
    contactNo: {
        type:String,
        required: true,
        lowercase: true,
    },
    description: {
        type:String,
        required: true,
        lowercase: true,
    }
})
module.exports = mongoose.model("ContactUs", contactUsSchema);