import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {signin} from "../actions/adminActions";
import {listBooks, saveBook, deleteBook} from "../actions/bookActions";

function AddBookScreen(props) {

    const [modalVisible, setModalVisible]= useState(false);
    const [id, setId]= useState("");
    const [bookName, setbookName]= useState("");
    const [author, setAuthor]= useState("");
    const [image, setImage]= useState("");
    const [category, setCategory]= useState("");
    const [status, setStatus]= useState("");
    const [description, setDescription]= useState("");
    const [rating, setRating]= useState("");
    const bookList= useSelector(state => state.bookList);
    const {loading, books, error}= bookList;
    // For save

    const bookSave= useSelector(state => state.bookSave);
    const {loading: loadingSave, success: successSave, error: errorSave}= bookSave;

    // For delete
    const bookDelete= useSelector(state => state.bookDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete}= bookDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave) {
            setModalVisible(false);
        }
        dispatch(listBooks());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (book) => {
        setModalVisible(true);
        setId(book._id);
        setbookName(book.bookName);
        setAuthor(book.author);
        setImage(book.image);
        setCategory(book.category);
        setStatus(book.status);
        setDescription(book.description);
        setRating(book.rating);

    };


    const submitHandler=(e) => {
        e.preventDefault();
        dispatch(saveBook({bookName, author, image, category, status, description, rating}));
    };

    const deleteHandler= (book) => {
        dispatch(deleteBook(book._id));
    }
    return ( <div className="content content-margined">

        <div className="book-header">
            <h3>Books</h3>
            <button onClick={() => openModal({})}>Create book</button>
        </div>
        { modalVisible && (
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>Add a book</h3>
                        </li>
                        <li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>{errorSave}</div>}
                        </li>
                        <li>
                            <label htmlFor="BookName">Book name:</label>
                            <input type="text" name="BookName" value={bookName} id="BookName"
                                   onChange={(e) => setbookName(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="author">Author:</label>
                            <input type="text" id="author" name="author" value={author}
                                   onChange={(e) => setAuthor(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="image">Image:</label>
                            <input type="text" id="image" name="image" value={image}
                                   onChange={(e) => setImage(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="category">Category:</label>
                            <input type="text" name="category" id="category" value={category}
                                   onChange={(e) => setCategory(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="status">Status:</label>
                            <input type="text" id="status" name="status" value={status}
                                   onChange={(e) => setStatus(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" name="description" value={description}
                                   onChange={(e) => setDescription(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="rating">Rating:</label>
                            <input type="text" id="rating" name="rating" value={rating}
                                   onChange={(e) => setRating(e.target.value)}></input>
                        </li>
                        <li>
                            <button type="submit" className="button primary">{id ? "Update": "Add booκ"}</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
                        </li>
                    </ul>
                </form>
            </div>
        )}

        <div className="book-list">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Available</th>
                    <th>Author</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {books.map( (book) => (
                    <tr key={book._id}>
                        <td>{book._id}</td>
                        <td>{book.bookName}</td>
                        <td>{book.category}</td>
                        <td>{book.status}</td>
                        <td>{book.author}</td>
                        <td>{book.rating}</td>

                        <td>
                            <button onClick={() => openModal(book)}>Edit</button>
                            <button onClick={() => deleteHandler(book)}>Delete</button>
                        </td>
                    </tr>))}

                </tbody>
            </table>
        </div>
    </div>
    )
}
export default AddBookScreen;