import styles from "./style.module.css";
import { Aside } from "../../components/Aside/Aside";
import { BooksList } from "../../components/BooksList/BooksList";
import { books } from "../../constants/mock";
import { useState } from "react";

export const StorePage = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <main className={styles.main}>
        <Aside list={books} func={setValue} />
        <BooksList arr={books} need_genre={value} />
      </main>
    </>
  );
};
