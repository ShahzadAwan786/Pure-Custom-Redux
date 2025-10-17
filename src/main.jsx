import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import { CartList } from "./pages/CartList";
import { Home } from "./pages/Home";
import { Provider } from "./reduxContext";
import { store } from "../store/reducer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <App /> },
      { path: "/cart", element: <CartList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
