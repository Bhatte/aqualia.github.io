import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Simple loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-pulse text-neutral-400">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-8 pb-0 bg-neutral-900 text-neutral-50">
      <Navbar />
      <main className="w-full flex-1 flex justify-center">
        <div className="w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
