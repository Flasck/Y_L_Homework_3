import styles from "./style.module.css";

export const BookGenre = ({ genre, func, style }) => {
  const handler = () => {
    func(genre);
    return undefined;
  };

  return (
    <a style={style} onClick={handler} className={styles.a} href="#">
      {genre}
    </a>
  );
};
