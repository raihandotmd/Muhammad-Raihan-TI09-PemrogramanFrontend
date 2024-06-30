import { useContext } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import MoviesContext from "../context/MoviesContext";
import data from "../utils/constants/data";

const Home = () => {
  const { setMovies } = useContext(MoviesContext);

  setMovies(data);
  return (
    <>
      <Hero />
      <Movies />
    </>
  );
};

export default Home;
