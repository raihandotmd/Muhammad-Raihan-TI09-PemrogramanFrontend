import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/Movies/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";

const Home = () => {
  const [movies, setMovies] = useState(data);
  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

export default Home;
