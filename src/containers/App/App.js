import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddPostsPage from "../AddPostsPage/AddPostsPage";
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/add-post" component={AddPostsPage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
