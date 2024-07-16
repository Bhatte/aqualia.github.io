import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between p-8 pb-0">
      {/* <Header></Header> */}
      <Navbar />
      <main className="w-full flex-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
