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
        <NavBar />

        <Outlet />

        <div className="">Пока пусто</div>
      </main>
    </Container>
  );
};
