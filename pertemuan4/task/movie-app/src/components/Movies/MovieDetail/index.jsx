import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../ui/Button";
import StyledDetailMovie from "./StyledMovieDetail";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";
  const idTrailer = movie.videos ? movie.videos.results[0].key : "";
  const tmdbImage = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  useEffect(() => {
    async function getMovieDetail() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const res = await axios(URL);

      setMovie(res.data);
    }

    getMovieDetail();
  }, [id]);
  return (
    <StyledDetailMovie>
      <div>
        <img src={tmdbImage} alt={movie.title} />
      </div>
      <div className="hero__left">
        <h2>{movie.title}</h2>
        <h3>Genre: {genres}</h3>
        <p>{movie.overview}</p>
        <Button
          as="a"
          href={`https://www.youtube.com/watch?v=${idTrailer}`}
          target="_blank"
        >
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
};

export default MovieDetail;
