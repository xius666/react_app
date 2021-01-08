import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./Row.css";
function Row({ title, fetchUrl, LargeRow }) {
  const base = "http://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //dependent on the fetchurl pulled from outside
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${LargeRow && "row_posterLarge"}`}
            /*if larger row show the poster else the thumbnail */
            src={`${base}${LargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
