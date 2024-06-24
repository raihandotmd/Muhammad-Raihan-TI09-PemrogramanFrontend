import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchPopularMovies() {
      const res = await axios(ENDPOINTS.POPULAR);

      setMovies(res.data.results);
    }

    fetchPopularMovies();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </>
  );
};

export default PopularMovie;
