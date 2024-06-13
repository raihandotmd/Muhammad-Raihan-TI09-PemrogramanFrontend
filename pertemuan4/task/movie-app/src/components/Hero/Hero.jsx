import { useEffect, useState } from "react";
import StyledHero from "./StyledHero";
import axios from "axios";

import Button from "../ui/Button";

const Hero = () => {
  const [movie, setMovie] = useState([]);
  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";
  const idTrailer = movie.videos ? movie.videos.results[0].key : "";
  const tmdbImage = `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    async function fetchFirstTrendingMovie() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

      const res = await axios(URL);

      const firstMovie = res.data.results[0];

      return firstMovie;
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchFirstTrendingMovie();
      const id = trendingMovie.id;

      const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
      const res = await axios(URL);

      setMovie(res.data);

      console.log(res.data);
    }

    fetchDetailMovie();
  }, []);

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>Genre: {genres}</h3>
          <p>{movie.overview}</p>
          <Button
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch
          </Button>
        </div>
        <div>
          <img src={tmdbImage} alt={movie.Title} />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
