const express = require('express');
const router = express.Router();

router.get('/books', async (req, res) => {
    const books = await Book.getAll();
  
    res.status(200).json(books);
  });
