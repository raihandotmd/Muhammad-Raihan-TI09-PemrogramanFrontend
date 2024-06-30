import React, { useContext, useEffect } from "react";
import MovieDetail from "../../components/Movies/MovieDetail";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { setMovies } = useContext(MoviesContext);

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
      <Movies title="Movie Recommendations" />
    </div>
  );
};

export default MovieDetailPage;
