import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddPostsPage from "../AddPostsPage/AddPostsPage";
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage";
import FullPost from "../FullPost/FullPost";
import EditPostPage from "../EditPostPage/EditPostPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/add-post" component={AddPostsPage} />
              <Route path="/post/:id" exact component={FullPost} />
              <Route path="/post/:id/edit" component={EditPostPage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
