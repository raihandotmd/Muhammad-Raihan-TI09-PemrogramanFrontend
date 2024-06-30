import { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

const NowPlayingMovie = () => {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const res = await axios(ENDPOINTS.NOW_PLAYING);

      setMovies(res.data.results);
    }

    fetchNowPlayingMovies();
  }, []);
  return (
    <>
      <Hero />
      <Movies title="Now Playing Movies" />
    </>
  );
};

export default NowPlayingMovie;
