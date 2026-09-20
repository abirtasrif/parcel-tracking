import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import DateTimeDisplay from "./components/DateTimeDisplay";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Weather from "./components/Weather";
import "./index.css";
import ChronopostPage from "./pages/chronopost";
import DHLPage from "./pages/dhl";
import FedExPage from "./pages/fedex";
import UpsPage from "./pages/ups";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-4 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <DateTimeDisplay />
        <Weather />
      </section>
      <Quote />
      <Footer />
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