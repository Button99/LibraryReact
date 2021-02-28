import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {listBooks} from "../actions/bookActions";

function HomeScreen(props) {

    const bookList= useSelector(state => state.bookList);
    const {books, loading, error}= bookList;
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(listBooks());

        return () => {
            //
        };
    }, [])

    return loading ? <div>Loading... </div> : error? <div>{error}</div>:
<ul className="books">
        {
            books.map(book =>
                <li key={book._id}>
                    <div className="book">
                        <Link to={"/book/"+ book._id}><img className="book-image" src={book.image} alt="book" /></Link>
                        <div className="book-name">
                            <Link to={"/book/ "+ book._id}>{book.name}</Link>
                        </div>
                        <div className="book-author">{book.author}</div>
                    </div>
                </li>)
        }

    </ul>
};

export default HomeScreen;