import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./Pages/Intro/Intro";
import Weather from "./Pages/Weather/Weather";
const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Intro /> },
    { path: "/weather", element: <Weather /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
