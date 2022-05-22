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

router.get('/book/:id', async (req, res) => {
    const { id } = req.params;
  
    const book = await Book.getById(id);
  
    if (!book) return res.status(404).json({ message: 'Book not found' });
  
    res.status(200).json(book);
  });

