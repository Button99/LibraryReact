import mongoose from "mongoose";

const bookSchema= new mongoose.Schema({
    bookName: {type: String, required: true},
    author: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    status: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number, default: 0, required: true}
});

const bookModel= mongoose.model("Book", bookSchema);

export default bookModel;