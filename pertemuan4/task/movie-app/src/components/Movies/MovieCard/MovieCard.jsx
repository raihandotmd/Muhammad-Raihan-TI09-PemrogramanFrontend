import styles from "./MovieCard.module.css";

const MovieCard = () => {
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src="https://picsum.photos/300/400"
                alt="placeholder"
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Movie Date</p>
        </div>
    );
};

export default MovieCard;
