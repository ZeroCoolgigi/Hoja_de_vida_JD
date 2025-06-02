import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Banner from "../pages/banner/banner";
import Header from "../pages/header/header";


function Rutas() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
