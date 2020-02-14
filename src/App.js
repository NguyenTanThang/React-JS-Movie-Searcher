import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MovieList from "./components/movieList";
import MovieDetail from "./components/movieDetail"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Router>
    </div>
  );
}

export default App;
