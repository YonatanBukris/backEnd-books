const Book = require("../models/book.model");
const { buildCritiria } = require("../helpers/book.helper");


async function getBooksCount(req, res) {
    const {query} = req;
    const critiria = buildCritiria(query);
    try{
        const count = await Book.countDocuments(critiria);
        res.status(200).json({count});
    } catch(err){
        console.log(
            "book.controller, getBooksCount. Error while getting book count",
      err
        );
        res.status(500).json({message: "Server error while getting book count"})
    }
}

async function getBooks(req, res) {
    const { query } = req;
    const critiria = buildCritiria(query);
  
    let page = query.page || 1;
    if (page < 1) page = 1;
  
    const limit = query.limit || 4;
    const startIndex = (page - 1) * limit || 0;
    try {
      const books = await Book.find(critiria).skip(startIndex).limit(limit);
      res.status(200).json(books);
    } catch (err) {
      console.log("book.controller, getBooks. Error while getting book", err);
      res.status(500).json({ message: "Server error while getting book" });
    }
  }

  async function getBookById(req, res) {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      res.status(200).json(book);
    } catch (err) {
      if (err.name === "CastError") {
        console.log(
          `book.controller, getBookById. CastError! book not found with id: ${id}`
        );
        return res.status(404).json({ message: "Book not found" });
      }
      console.log(
        `book.controller, getBookById. Error while getting book with id: ${id}`,
        err
      );
      res.status(500).json({ message: "Server error while getting book" });
    }
  }
  async function deleteBook(req, res) {
    const { id } = req.params;
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
      res.json({ message: "Book deleted" });
    } catch (err) {
      if (err.name === "CastError") {
        console.log(
          `book.controller, deleteBook. CastError! book not found with id: ${id}`
        );
        return res.status(404).json({ message: "Book not found" });
      } else {
        console.log(
          `book.controller, deleteBook. Error while deleting book with id: ${id}`,
          err
        );
        res.status(500).json({ message: "Server error while deleting book" });
      }
    }
  }

  async function createBook(req, res) {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      if (err.name === "ValidationError") {
        // Mongoose validation error
        console.log(`book.controller, createBook. ${err.message}`);
        res.status(400).json({ message: err.message });
      } else {
        // Other types of errors
        console.log(`book.controller, createBook. ${err}`);
        res.status(500).json({ message: "Server error while creating book" });
      }
    }
  }

  async function updateBook(req, res) {
    const { id } = req.params;
  
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      res.status(200).json(updatedBook);
    } catch (err) {
      if (err.name === "CastError") {
        console.log(
          `book.controller, getBookById. CastError! book not found with id: ${id}`,
          err
        );
        res.status(404).json({ message: "Book not found" });
      } else if (err.name === "ValidationError") {
        // Mongoose validation error
        console.log(`book.controller, updateBook. ${err.message}`);
        res.status(400).json({ message: err.message });
      } else {
        // Other types of errors
        console.log(`book.controller, updateBook. ${err}`);
        res.status(500).json({ message: "Server error while updating book" });
      }
    }
  }

module.exports = {
    getBooksCount,
    getBooks,
    getBookById,
    deleteBook,
    createBook,
    updateBook,
  };