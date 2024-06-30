import axios from "axios";
import { useContext, useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

const PopularMovie = () => {
  const { setMovies } = useContext(MoviesContext);
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
      <Movies title="Popular Movies" />
    </>
  );
};

export default PopularMovie;
