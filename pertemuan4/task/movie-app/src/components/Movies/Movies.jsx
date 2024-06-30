import { useContext } from "react";
import Button from "../ui/Button";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";
import MoviesContext from "../../context/MoviesContext";

const Movies = (props) => {
  const { movies, setMovies } = useContext(MoviesContext);
  const { title = "Latest Movies" } = props;

  function handleClick() {
    const newMovie = {
      id: nanoid(),
      title: "Iron Man",
      year: "2019",
      type: "Movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    };

    setMovies([...movies, newMovie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}> {title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <Button onClick={handleClick}>Add Movie</Button>
      </section>
    </div>
  );
};

export default Movies;
