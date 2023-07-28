import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Dhl from "./pages/dhl.jsx";
import Fedex from "./pages/fedex.jsx";
import Ups from "./pages/ups.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhl" element={<Dhl />} />
        <Route path="/fedex" element={<Fedex />} />
        <Route path="/ups" element={<Ups />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
