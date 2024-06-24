import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchPopularMovies() {
      const res = await axios(ENDPOINTS.TOP_RATED);

      setMovies(res.data.results);
    }

    fetchPopularMovies();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} title="Top Rated Movies" />
    </>
  );
};

export default TopRatedMovie;
