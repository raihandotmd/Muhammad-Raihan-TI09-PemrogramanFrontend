import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "./Alert";

const AddMovieForm = (props) => {
  const { movies, setMovies } = props;
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };
      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form__imageContainer}>
        <img
          className={styles.form__image}
          src="https://picsum.photos/467/424"
          alt="placeholder"
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.form__title}>Add Movie</h1>
        <label htmlFor="title" className={styles.form__inputLabel}>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className={styles.form__input}
          value={title}
          onChange={handleTitle}
        />
        {isTitleError ? <Alert>Title Wajib Diisi</Alert> : ""}
        <label htmlFor="year" className={styles.form__inputLabel}>
          Year
        </label>
        <input
          type="text"
          id="year"
          name="year"
          className={styles.form__input}
          value={date}
          onChange={handleDate}
        />
        {isDateError ? <Alert>Date Wajib Diisi</Alert> : ""}
        <button className={styles.form__submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
