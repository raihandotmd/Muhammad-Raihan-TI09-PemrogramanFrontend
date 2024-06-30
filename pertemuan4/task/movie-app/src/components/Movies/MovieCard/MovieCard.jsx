import StyledMovie from "./StyledMovie";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;

  const tmdbImage = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.year || movie.release_date;

  return (
    <StyledMovie>
      <img src={movie.poster || tmdbImage} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>

      <p>{year}</p>
    </StyledMovie>
  );
};

export default MovieCard;
