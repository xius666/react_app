import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios.js";
import "./Row.css";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, LargeRow }) {
  const base = "http://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailer_url, setTrailer_url] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //dependent on the fetchurl pulled from outside
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailer_url) {
      setTrailer_url("");
      setMsg("");
    } else {
      setMsg("");
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer_url(urlParams.get("v"));
        })
        .catch((error) => setMsg(`No trailer found for ${movie.name}`));
    }
  };
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
            onClick={() => handleClick(movie)}
            /*if larger row show the poster else the thumbnail */
            src={`${base}${LargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailer_url && <YouTube videoId={trailer_url} opts={opts} />}
      {msg && <h3 className="error"> {msg} </h3>}
    </div>
  );
}

export default Row;
