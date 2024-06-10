import StyledMovie from "./StyledMovie";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <StyledMovie>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </StyledMovie>
  );
};

export default MovieCard;
