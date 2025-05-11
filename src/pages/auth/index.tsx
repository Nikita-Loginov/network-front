import { Outlet } from "react-router-dom";
import { useState } from "react";

import styles from "./index.module.css";
import React from "react";

import { TabsUrl } from "../../componets/ui/TabsUrl";

export type LinkType = {
  id: number | string;
  href: string;
  text: string;
};

export const Auth = React.memo(() => {
  const [links] = useState<LinkType[]>(
    [
      {
        href: "login",
        text: "Вход",
      },
      {
        href: "signup",
        text: "Регистрация",
      },
    ].map((item, index) => ({ ...item, id: index + 1 }))
  );

  return (
    <div className={styles.box}>
      <div className={styles.inner}>
        <TabsUrl links={links} />

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
});
