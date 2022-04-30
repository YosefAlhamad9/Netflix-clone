﻿import axios from "./axios";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";

import "./Row.css";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  //   const handleClick = (movie) => {
  //     if (trailerUrl) {
  //       setTrailerUrl("");
  //     } else {
  //       movieTrailer(movie?.name || "")
  //         .then((url) => {
  //           const urlParams = new URLSearchParams(new URL(url).search);
  //           setTrailerUrl(urlParams.get("v"));
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                // onClick={handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
