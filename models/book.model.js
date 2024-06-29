const mongoose = require("mongoose");

//Create a schema

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        description: {
            type:String,
            required: true,
        },
    
    },
    {timestamps: true}
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;