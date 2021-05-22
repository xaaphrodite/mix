const mongoose = require("mongoose");
const collection = "henllomevn";

const mevnSchema = mongoose.Schema({
    name: String,
    username: String,
    dateOfBirth: String,
    education: String,
    majors: String,
    address: String,
    zipCode: String,
    email: String,
    phone: Number,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("mevn", mevnSchema, collection);
