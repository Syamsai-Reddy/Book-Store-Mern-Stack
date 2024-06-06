import express from "express"
import { PORT , MONGODBURL} from "./config.js"
import mongoose from "mongoose"
import {Book} from "./models/book.models.js"
import booksRoute from "./routes/books.router.js"
import cors from "cors"

const app = express();

//middleware for parsing request from body
app.use(express.json())


// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );



app.get('/' , (req,res)=>{
    return res.status(234).send("Hello This is A Booking Store")
})


app.use('/books', booksRoute);


mongoose.connect(MONGODBURL)
.then(()=>{
    console.log("db connected Sucessfully")
    app.listen(PORT , ()=>{
        console.log(`App is listening to Port : ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})


