import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import DateTimeDisplay from "./components/DateTimeDisplay";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Weather from "./components/Weather";
import "./index.css";
import ChronopostPage from "./pages/chronopost";
import DHLPage from "./pages/dhl";
import FedExPage from "./pages/fedex";
import UpsPage from "./pages/ups";

// Layout component with Navbar and Outlet for child routes
const RootLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-row">
        <DateTimeDisplay />
        <Outlet />
        <Weather />
      </div>
      <Quote />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dhl",
        element: <DHLPage />,
      },
      {
        path: "/ups",
        element: <UpsPage />,
      },
      {
        path: "/fedex",
        element: <FedExPage />,
      },
      {
        path: "/chronopost",
        element: <ChronopostPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
