import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function getWatchedMovies() {
	var movies = localStorage.getItem('movies')

	if (!movies) {
		return [];
	} else {
		return JSON.parse(movies).filter(movie => movie.watched);
	}
}

// Using local storage is fine, but today we have context and react hooks that can do this kind of thing
// without using the browser memory
// Also we could use only one array and add a new property to the movies that indicates if it already been watched.

export function getAllMovies() {
	var movies = localStorage.getItem('movies');

	if (!movies) {
		return [
		{
			title: 'The Avengers',
			image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
			comment: 'New York blows up in this!',
			watched: false
		},
		{
			title: 'Dark City',
			image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
			comment: 'This looks mysterious. Cool!',
			watched: false
		},
		{
			title: 'Hot Tub Time Machine',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
			comment: 'Someone said this was fun. Maybe!',
			watched: false
		},
		];
	} else {
		return JSON.parse(movies);
	}
}

export function add(title, description, image) {
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;
	movie.watched = false

	var movies = getAllMovies();
	movies.push(movie);

	localStorage.setItem('movies', JSON.stringify(movies));

	render();
}

export function toggleMovie(movie) {
	var movies = getAllMovies().map(mv => mv.title === movie.title ? {...mv, watched: !movie.watched} : {...mv});
	localStorage.setItem('movies', JSON.stringify(movies));

	render();
}

function render() {
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();
