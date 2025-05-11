import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux";
import { Layout } from "./componets/shared/Layout/index.tsx";
import { ThemeProvider } from "./componets/shared/ThemeProvider/index.tsx";

import { Posts } from "./pages/posts/index.tsx";
import { Following } from "./pages/following/index.tsx";
import { Followers } from "./pages/followers/index.tsx";

import "./stylesGlobal/reset.scss";
import "./stylesGlobal/fonts.scss";
import "./stylesGlobal/vars.scss";
import "./stylesGlobal/global.scss";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <h1>Auth</h1>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "/following",
        element: <Following />,
      },
      {
        path: "/followers",
        element: <Followers />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
