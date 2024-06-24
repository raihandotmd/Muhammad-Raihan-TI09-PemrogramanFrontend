import React, { useEffect, useState } from "react";
import MovieDetail from "../../components/Movies/MovieDetail";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesRecommendation() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}`;
      const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations${params}`;
      const res = await axios(URL);

      setMovies(res.data.results);
    }

    getMoviesRecommendation();
  }, [id]);
  return (
    <div>
      <MovieDetail />
      <Movies movies={movies} title="Movie Recommendations" />
    </div>
  );
};

export default MovieDetailPage;
