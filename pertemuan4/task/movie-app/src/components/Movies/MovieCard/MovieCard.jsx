import StyledMovie from "./StyledMovie";

const MovieCard = (props) => {
  const { movie } = props;

  const tmdbImage = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.year || movie.release_date;

  return (
    <StyledMovie>
      <img src={movie.poster || tmdbImage} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{year}</p>
    </StyledMovie>
  );
};

export default MovieCard;
