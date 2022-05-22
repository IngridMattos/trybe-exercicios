const Joi = require('joi');
const Book = require('../services/Book');

const getAll = async (_req, res) => {
    const books = await Book.getAll();
  
    return res.status(200).json(books);
  };
  
  const findById = async (req, res, next) => {
    const { id } = req.params;
  
    const book = await Book.findById(id);
  
    if (book.error) return next(book.error);
  
    return res.status(200).json(book);
  };
  
