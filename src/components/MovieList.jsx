import React from "react";
import doom from './doom.jpg';
import fantastic4 from './fantastic4.jpg';
import superman from './superman.avif';
import cp from './cp.jpg';



const MovieList = () => {
  const movies = [
    { 
      title: "CAPTAIN AMERICA BRAVE NEW WORLD", 
      rating: "8.5", 
      poster: cp
    },
    { 
      title: "Dune: Part Two", 
      rating: "8.8", 
      poster: doom
    },
    { 
      title: "Super-Man: No Way Home", 
      rating: "8.3", 
      poster: superman
    },
    { 
      title: "John Wick 4", 
      rating: "8.6", 
      poster: fantastic4
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Movie List</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", width: "200px", textAlign: "center" }}>
            <img src={movie.poster} alt={movie.title} style={{ width: "100%", borderRadius: "5px" }} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;