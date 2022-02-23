import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

// Its better to split the components into different files, that makes the project more organized.
const getMoviesComponents = (movies) => {
  var components = [];

  /* 
    You could use a list <ul> to make this more semantical in HTML
    it's better SEO and better accessebility.
    Also you need to add a "key" property using the index of the iterator to avoid unecessary rendering. 
  */
  movies.forEach(function(movie) {
    components.push(
      // This class name doesn't describe very well the component, we could change to more detailed one.
      <div className="all">
        <div>
          {/* its not a good idea to change the image style from the height, always use the width in order to keep the w and h ratio fine. */}
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* We can use an arrow function here, benefits from ES6 */}
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a>
        </span>
        {/* Avoid using BR to style, it's hard to change it's style and it could easily break the layout */}
        <br />
        {/* a <p> would be better for SEO and accessebility */}
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  /* 
    This is basically the same component used to display all movies, we can just do a condition in the iterator
    to see if its been already watched, if so then we add the specific classic
  */
  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* also I've noticed that this function works like a toggle, we can use a single function to do this kind of thing */}
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

function App(props) {


  return (
    <div className="App">
      {/* This could be a separate component, using hooks to maange the state and to add a new movie */}
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

var title = '';
var image = '';
var comment = '';

export default App;
