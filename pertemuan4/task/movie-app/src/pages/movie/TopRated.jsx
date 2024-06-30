import axios from "axios";
import { useEffect, useContext } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

const TopRatedMovie = () => {
  const { setMovies } = useContext(MoviesContext);
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
      <Movies title="Top Rated Movies" />
    </>
  );
};

export default TopRatedMovie;
