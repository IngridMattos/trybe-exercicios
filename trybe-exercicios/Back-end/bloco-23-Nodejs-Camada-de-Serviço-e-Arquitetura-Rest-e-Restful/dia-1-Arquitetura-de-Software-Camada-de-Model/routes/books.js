const express = require('express');
const rescue = require('express-rescue');

const Book = require('./controllers/Book');
const errorMiddleware = require('./middlewares/error');

const router = express.Router();

const Book = require('../models/Book')

router.get('/books', rescue(Book.getAll));
router.get('/books/:id', rescue(Book.findById));
router.post('/books', rescue(Book.createBook));

router.use(errorMiddleware);