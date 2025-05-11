import type React from "react";
import styles from "./index.module.css";

type ContainerProps = {
  children: React.ReactElement[] | React.ReactElement;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
