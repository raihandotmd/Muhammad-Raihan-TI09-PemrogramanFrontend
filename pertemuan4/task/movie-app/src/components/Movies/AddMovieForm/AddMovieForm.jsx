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
    image: {
      value: "https://picsum.photos/300/400",
      error: false,
    },
    type: {
      value: "",
      error: false,
    },
  });

  function handleTitle(e) {
    setInputVal("title", e.target.value);

    // setInputValue({
    //   ...inputValue,
    //   title: {
    //     ...inputValue.title,
    //     value: e.target.value,
    //   },
    // });
  }

  function handleDate(e) {
    setInputVal("date", e.target.value);

    // setInputValue({
    //   ...inputValue,
    //   date: {
    //     ...inputValue.date,
    //     value: e.target.value,
    //   },
    // });
  }

  function handleImage(e) {
    setInputVal("image", e.target.value);
  }

  function handleType(e) {
    setInputVal("type", e.target.value);
  }

  // by having this i can set input easily.
  function setInputVal(type, value) {
    setInputValue({
      ...inputValue,
      [type]: {
        ...inputValue[type],
        value: value,
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
    } else if (inputValue.image.value === "") {
      setInputErr("image", true);
    } else if (inputValue.type.value === "") {
      setInputErr("type", true);
    } else {
      const movie = {
        id: nanoid(),
        title: inputValue.title.value,
        year: inputValue.date.value,
        type: inputValue.type.value,
        poster: inputValue.image.value,
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

        <label htmlFor="image" className={styles.form__inputLabel}>
          Image
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className={styles.form__input}
          value={inputValue.image.value}
          onChange={handleImage}
        />
        {inputValue.date.error ? <Alert>Image wajib Di isi!</Alert> : ""}

        <label htmlFor="type" className={styles.form__inputLabel}>
          type
        </label>
        <select
          className={styles.form__input}
          name="type"
          id="type"
          value={inputValue.type.value}
          onChange={handleType}
        >
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
          <option value="others">others</option>
        </select>
        {inputValue.date.error ? <Alert>Type wajib Di isi!</Alert> : ""}

        <button className={styles.form__submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
