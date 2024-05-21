import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "./Alert";

const AddMovieForm = (props) => {
  const { movies, setMovies } = props;

  const [inputValue, setInputValue] = useState({
    title: {
      value: "",
      error: false,
    },
    date: {
      value: "",
      error: false,
    },
  });

  function handleTitle(e) {
    setInputValue({
      ...inputValue,
      title: {
        ...inputValue.title,
        value: e.target.value,
      },
    });
  }

  function handleDate(e) {
    setInputValue({
      ...inputValue,
      date: {
        ...inputValue.date,
        value: e.target.value,
      },
    });
  }

  // by having this i can make it more reproducible
  function setInputErr(typeValue, status) {
    if (typeValue == "all") {
      setInputValue({
        ...inputValue,
        date: {
          ...inputValue.date,
          error: status,
        },

        title: {
          ...inputValue.title,
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

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue.title.value === "") {
      setInputErr("title", true);

      // setInputValue({
      //   ...inputValue,
      //   title: {
      //     ...inputValue.title,
      //     error: true,
      //   },
      // });
    } else if (
      // checking to see if date value is not null and int.
      inputValue.date.value === "" &&
      inputValue.date.value % 1 === 0
    ) {
      setInputErr("date", true);

      // setInputValue({
      //   ...inputValue,
      //   date: {
      //     ...inputValue.date,
      //     error: true,
      //   },
      // });
    } else {
      const movie = {
        id: nanoid(),
        title: inputValue.title.value,
        year: inputValue.date.value,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };
      setMovies([...movies, movie]);

      setInputErr("all", false);
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
          value={inputValue.title.value}
          onChange={handleTitle}
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
          value={inputValue.date.value}
          onChange={handleDate}
        />
        {inputValue.date.error ? (
          <Alert>Date Wajib Diisi dan harus Angka!</Alert>
        ) : (
          ""
        )}
        <button className={styles.form__submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
