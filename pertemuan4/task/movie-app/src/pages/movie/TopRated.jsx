import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchPopularMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      const res = await axios(URL);

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
