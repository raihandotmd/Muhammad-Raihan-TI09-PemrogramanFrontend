import styles from "./Form.module.css";

const Form = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form__imageContainer}>
                <img
                    className={styles.form__image}
                    src="https://picsum.photos/467/424"
                    alt="placeholder"
                />
            </div>
            <form className={styles.form}>
                <h1 className={styles.form__title}>Add Movie</h1>
                <label htmlFor="title" className={styles.form__inputLabel}>
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className={styles.form__input}
                />
                <label htmlFor="year" className={styles.form__inputLabel}>
                    Year
                </label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    className={styles.form__input}
                />
                <button className={styles.form__submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
