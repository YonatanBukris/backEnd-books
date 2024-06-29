const express = require("express");
const router = express.Router();

const {
    getBooks,
    getBooksCount,
    getBookById,
    deleteBook,
    createBook,
    updateBook,
} = require("../controllers/book.controller");

router.get("/", getBooks);
router.get("/count",getBooksCount);
router.get("/:id", getBookById);
router.delete("/:id", deleteBook);
router.post("/", createBook);
router.patch("/:id", updateBook);


module.exports = router;