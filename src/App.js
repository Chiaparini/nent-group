import React from 'react';
import addMovie from "./AddMovies";
import './App.css';

import { getWatchedMovies, getAllMovies } from './index.js';
import moviesListComponent from "./MoviesList";

function App() {
  return (
    <div className="App">
      {/* This could be a separate component, using hooks to maange the state and to add a new movie */}
      {addMovie()}

      <h1>Watchlist:</h1>
      {moviesListComponent(getAllMovies())}

      <h1>Already watched:</h1>
      {moviesListComponent(getWatchedMovies())}
    </div>
  );
}

export default App;