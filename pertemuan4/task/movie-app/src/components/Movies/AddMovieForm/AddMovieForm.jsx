import { useContext, useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "./Alert";
import MoviesContext from "../../../context/MoviesContext";

const AddMovieForm = (props) => {
  const { movies, setMovies } = useContext(MoviesContext);

  const [inputValue, setInputValue] = useState({
    title: {
      value: "",
      error: false,
    },
    year: {
      value: "",
      error: false,
    },
    image: {
      value: "https://picsum.photos/300/400",
      error: false,
    },
    type: {
      value: "Action",
      error: false,
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInputVal(name, value);
  }

  // by having this i can set input easily.
  function setInputVal(name, value) {
    setInputValue({
      ...inputValue,
      [name]: {
        ...inputValue[name],
        value: value,
      },
    });
  }

  // by having this i can make it more reproducible
  function setInputErr(typeValue, status) {
    if (typeValue == "all") {
      setInputValue({
        ...inputValue,
        year: {
          ...inputValue.year,
          error: status,
        },

        title: {
          ...inputValue.title,
          error: status,
        },
        image: {
          ...inputValue.image,
          error: status,
        },
        type: {
          ...inputValue.image,
          error: status,
        },
      });
    } else {
      setInputValue({
        ...inputValue,
        [typeValue]: {
          ...inputValue[typeValue],
          error: status,
        },
      });
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: inputValue.title.value,
      year: inputValue.year.value,
      type: inputValue.type.value,
      poster: inputValue.image.value,
    };
    setMovies([...movies, movie]);
  }

  // input validator
  function inputValidator() {
    if (inputValue.title.value === "") {
      setInputErr("title", true);

      return false;
    } else if (
      // checking to see if the Year value is not null and int.
      inputValue.year.value === "" &&
      inputValue.year.value % 1 === 0
    ) {
      setInputErr("year", true);
      return false;
    } else if (inputValue.image.value === "") {
      setInputErr("image", true);
      return false;
    } else if (inputValue.type.value === "") {
      setInputErr("type", true);
      return false;
    } else {
      setInputErr("all", false);
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    inputValidator() && addMovie();
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
          value={inputValue.title.value}
          onChange={handleChange}
        />
        {inputValue.title.error ? <Alert>Title Wajib Di isi!</Alert> : ""}
        <label htmlFor="year" className={styles.form__inputLabel}>
          Year
        </label>
        <input
          type="number"
          id="year"
          name="year"
          className={styles.form__input}
          value={inputValue.year.value}
          onChange={handleChange}
        />
        {inputValue.year.error ? (
          <Alert>Year Wajib Diisi dan harus Angka!</Alert>
        ) : (
          ""
        )}

        <label htmlFor="image" className={styles.form__inputLabel}>
          Image
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className={styles.form__input}
          value={inputValue.image.value}
          onChange={handleChange}
        />
        {inputValue.image.error ? <Alert>Image wajib Di isi!</Alert> : ""}

        <label htmlFor="type" className={styles.form__inputLabel}>
          type
        </label>
        <select
          className={styles.form__input}
          name="type"
          id="type"
          value={inputValue.type.value}
          onChange={handleChange}
        >
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
          <option value="others">others</option>
        </select>
        {inputValue.type.error ? <Alert>Type wajib Di isi!</Alert> : ""}

        <button className={styles.form__submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
