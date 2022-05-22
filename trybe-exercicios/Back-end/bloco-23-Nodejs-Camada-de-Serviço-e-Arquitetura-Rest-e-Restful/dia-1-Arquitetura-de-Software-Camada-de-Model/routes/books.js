const express = require('express');
const router = express.Router();

const book = require('../models/BooksModel')

router.get('/books', async (req, res) => {
    const { author_id } = req.query;
  
    const books = (author_id)
    ? await book.getByAuthorId(author_id)
    : await book.getAll();
  
    res.status(200).json(books);
  });