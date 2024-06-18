import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import axios from "axios";

const NowPlayingMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      const res = await axios(URL);

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
