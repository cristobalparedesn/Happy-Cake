//Importaciones externas
import { Route, Routes } from "react-router-dom";

//Importacines internas
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
