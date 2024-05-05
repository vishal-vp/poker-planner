import "./App.css";
// eslint-disable-next-line no-unused-vars
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./app-constants";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: `${PATHS.ROOM}/:roomID`,
        element: <Room />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
