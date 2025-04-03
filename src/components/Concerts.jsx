import React from "react";
import doom from './doom.jpg';
import fantastic4 from './fantastic4.jpg';
import superman from './superman.avif';
import cp from './cp.jpg';
export default function Concerts() { 
  const concerts = [
    { 
      name: "Coldplay - Music of the Spheres Tour", 
      rating: "9.2", 
      poster: doom
    },
    { 
      name: "Taylor Swift - The Eras Tour", 
      rating: "9.5", 
      poster: fantastic4
    },
    { 
      name: "BTS - Permission to Dance On Stage", 
      rating: "9.0", 
      poster:superman
    },
    { 
      name: "Ed Sheeran - Mathematics Tour", 
      rating: "8.8", 
      poster: cp
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Concert List</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {concerts.map((concert, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", width: "200px", textAlign: "center" }}>
            <img src={concert.poster} alt={concert.name} style={{ width: "100%", borderRadius: "5px" }} />
            <h3>{concert.name}</h3>
            <p>⭐ {concert.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}