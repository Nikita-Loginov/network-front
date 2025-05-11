import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../../../redux/slices/themeSlice";

import { Icons } from "../../../../public/icons";
import type { RootState } from "../../../redux";

export const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.icon}>
            <Icons.Twitter />
          </span>

          <span>Network</span>
        </Link>

        <div className={styles.actions}>
          <button
            className={classNames(styles.theme, {
              [styles.dark]: theme === "dark",
              [styles.light]: theme === "light",
            })}
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "dark" ? <Icons.Sun /> : <Icons.Moon />}
          </button>
        </div>
      </div>
    </header>
  );
};
