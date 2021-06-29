const mongoose = require("mongoose");
const collection = "posts";

const postSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String,
    image: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", postSchema, collection);
