import classNames from "classnames";
import styles from "./index.module.css";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import type { LinkType } from "../../../pages/auth";

type TabsUrlProps = {
  links: LinkType[];
};

export const TabsUrl: React.FC<TabsUrlProps> = ({ links }) => {
  const location = useLocation();

  const { oneProccentWidth, leftProccent, currentPath } = useMemo(() => {
    const currentPath =
      location.pathname.split("/").filter(Boolean).at(-1) || "login";

    const oneProccentWidth = links.length > 0 ? 100 / links.length : 100;

    const activeIndex = links.findIndex((item) => item.href === currentPath);

    const leftProccent =
      activeIndex !== -1 ? oneProccentWidth * activeIndex : 0;

    return { oneProccentWidth, leftProccent, currentPath };
  }, [location.pathname, links]);

  return (
    <ul className={styles.head}>
      {links.map((item) => (
        <li
          className={classNames(styles.link, {
            [styles.active]: item.href === currentPath,
          })}
          key={item.id}
        >
          <Link to={item.href}>{item.text}</Link>
        </li>
      ))}

      <div
        className={styles.decor}
        style={{
          width: `calc(-40px + ${oneProccentWidth}%)`,
          left: `calc(10px + ${leftProccent}%)`,
        }}
      ></div>
    </ul>
  );
};
