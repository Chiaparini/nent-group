import React from 'react';
import { toggleMovie } from './index.js';

const moviesListComponent = (movies) => {
  const renderMovie = (movie) => (
    <div className="all">
        <div>
        {/* its not a good idea to change the image style from the height, always use the width in order to keep the w and h ratio fine. */}
        <img src={movie.image} alt={movie.title}/>
        </div>
        <span>
        {/* We can use an arrow function here, benefits from ES6 */}
        
          <a className="movie-watched 2" href="#" onClick={function() { toggleMovie(movie) }}>
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

  return (
    <ul>
      {movies.map((movie, index) => 
        <li key={index}>
          {renderMovie(movie)}
        </li>
      )}
    </ul>
  )
}

export default moviesListComponent