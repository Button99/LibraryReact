import express from "express";
import Book from "../models/bookModel";
import { isAuth, isLoggedIn } from "../util";

const router= express.Router();

router.get("/", async (req, res) => {
    const books= await Book.find({});
    res.send(books);
});

router.post("/",async (req, res) => {
    const book= new Book({
        bookName: req.body.bookName,
        author: req.body.author,
        image: req.body.image,
        category: req.body.category,
        status: req.body.status,
        description: req.body.description,
        rating: req.body.rating
    });
    const newBook= await book.save();
    if(newBook) {
        return res.status(201).send({message: "New book created!", data: newBook});
    }

    return res.status(500).send({message: "Error in creating book"})
});

router.put("/:id", async (req, res) => {
    const bookId= req.params.id;
    const book= await Book.findById({bookId});
    if(book) {
        book.bookName= req.body.bookName;
        book.author= req.body.author;
        book.image= req.body.image;
        book.category= req.body.category;
        book.status=req.body.status;
        book.description= req.body.description;
        book.rating= req.body.rating;

        const updatedBook= await book.save();
        if(updatedBook) {
            return res.status(200).send({message: "book updated!", data: updatedBook});
        }
    }
    return res.status(500).send({message: "Error in updating book"});
});


router.delete("/:id", async (req, res) => {
    const deletedBook= await Book.findById(req.params.id);
    if(deletedBook) {
        await deletedBook.remove();
        res.send({message: "Book Deleted!"});
    } else {
        res.send("Error ");
    }
});

export default router;