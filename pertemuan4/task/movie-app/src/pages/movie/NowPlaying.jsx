import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const NowPlayingMovie = () => {
  const [movies, setMovies] = useState([]);

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
      <Movies movies={movies} title="Now Playing Movies" />
    </>
  );
};

export default NowPlayingMovie;
