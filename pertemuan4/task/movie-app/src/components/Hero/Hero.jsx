import { useEffect, useState } from "react";
import StyledHero from "./StyledHero";

import Button from "../ui/Button";

const Hero = () => {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    // fetching the data from ombd API
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button>Watch</Button>
        </div>
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
