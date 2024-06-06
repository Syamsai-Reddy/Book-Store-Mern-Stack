import express from "express";
import { Book } from "../models/book.models.js";


const router = express.Router();


//Routes for save a book

router.post('/' , async(req,res)=>{
  
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
          ) {
            return res.status(400).send({
              message: 'Send all required fields: title, author, publishedYear',
            });
          }
          // console.log(title);
          // console.log(author);
          // console.log(publishedYear);
            
          const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
          };
          console.log(newBook);
          const book = await Book.create(newBook);
      
          return res.status(201).send(book);
      
        
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({message:err.message})
    }
})

// Route for Get All Books from database
router.get('/', async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  // Route for Get One Book from database by id
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const book = await Book.findById(id);
  
      return res.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  // Route for Update a Book
  router.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishedYear
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
  
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  // Route for Delete a book
  router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router