
//! 1. Components
// App.js
// Handles the main logic and layout, including fetching and displaying movies.



import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPopularMovies = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=marvel`
    );
    setMovies(response.data.Search || []);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const searchMovies = async () => {
    if (!searchTerm) return;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`
    );
    setMovies(response.data.Search || []);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
