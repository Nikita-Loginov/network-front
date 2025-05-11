import { Link } from "react-router-dom";
import { useState } from "react";

import { Icons } from "../../../../public/icons";

import styles from "./index.module.css";

type LinkType = {
  id: string | number;
  icon?: React.FC;
  text: string;
  href: string;
};

export const NavBar = () => {
  const [links] = useState<LinkType[]>(
    [
      {
        icon: Icons.Newspaper,
        text: "Посты",
        href: "/",
      },
      {
        icon: Icons.UserCheck,
        text: "Подписки",
        href: "/following",
      },
      {
        icon: Icons.UserPlus,
        text: "Подписчики",
        href: "/followers",
      },
    ].map((item, index) => ({ ...item, id: index + 1 }))
  );
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((item: LinkType) => (
          <li key={item.id}>
            <Link to={item.href} className={styles.link}>
              {item.icon && (
                <span className={styles.icon}>
                  <item.icon />
                </span>
              )}

              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
