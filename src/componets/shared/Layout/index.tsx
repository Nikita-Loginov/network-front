import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

import { Container } from "../Container";
import { Header } from "../Header";
import { NavBar } from "../NavBar";

export const Layout = () => {
  return (
    <Container>
      <Header />

      <main className={styles.main}>
        <div className={styles.actions}>
          <NavBar />
        </div>

        <div className={styles.inner}>
          <Outlet />
        </div>

        <div className={styles.details}>
          <div className="">Пока пусто</div>
        </div>
      </main>
    </Container>
  );
};
