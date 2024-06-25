import React, { useEffect, useState } from "react";
import MovieDetail from "../../components/Movies/MovieDetail";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesRecommendation() {
      const res = await axios(ENDPOINTS.RECOMMENDATIONS(id));

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
