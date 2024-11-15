
// Handles individual movie display and modal logic.

import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="movie-card" onClick={() => setIsOpen(true)}>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>{movie.Title}</h2>
        <p>Release Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default MovieCard;
