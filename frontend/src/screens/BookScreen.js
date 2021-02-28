import React, {useEffect} from "react";
import  {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {detailsBook} from "../actions/bookActions";

function BookScreen(props) {

    const bookDetails= useSelector(state => state.bookDetails);
    const {book, loading, error}= bookDetails;
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(detailsBook(props.match.params.id));
        return () => {
           //
        };
    }, []);

    return   <div className="book-details">
            <div>
                <Link to="/">Back to result</Link>
            </div>
        {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            <div className="details-container">
                <div className="details-image">
                    <img src={book.image} alt="book"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h3>{book.name}</h3>
                        </li>
                        <li>
                            Author: {book.author}
                        </li>

                        <li>
                            Status: {book.status}
                        </li>
                        <li>
                            Rating: {book.rating}
                        </li>
                        <li>
                            <div><i>
                                Description: {book.description}
                            </i> </div>
                        </li>

                    </ul>
                </div>
            </div>
        }

    </div>
}

export default BookScreen;