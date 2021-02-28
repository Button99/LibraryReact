import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import SigninScreen from "./screens/SigninScreen";
import AddBookScreen from "./screens/addBookScreen";
import {useSelector} from "react-redux";

function App() {
    const adminSignin= useSelector(state => state.adminSignin);
    const {adminInfo}= adminSignin;
    return (
      <BrowserRouter>
      <div className="grid-container">
          <header className="header">
              <Link to="/">Library</Link>
              {
                  adminInfo ? <Link to="/addBooks">Add books?</Link> :
                  <Link to="/signin">Sign in</Link>
              }

          </header>
          <main className="main">
              <Route path="/signin" component={SigninScreen} />
              <Route path="/addBooks" component={AddBookScreen} />
              <Route path="/book/:id" component={BookScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
              <div className="content">

              </div>
          </main>
          <footer className="footer">
              All rights reserved.
          </footer>
      </div>
      </BrowserRouter>


  )
};

export default App;
