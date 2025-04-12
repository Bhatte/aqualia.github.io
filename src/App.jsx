import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components
const HomeLazy = lazy(() => import("./pages/Home"));
const AboutLazy = lazy(() => import("./pages/About"));
const ContactLazy = lazy(() => import("./pages/Contact"));
const ServicesLazy = lazy(() => import("./pages/Services"));
const ProductsLazy = lazy(() => import("./pages/Products"));

// Simple loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-full">
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-8 pb-0 bg-neutral-900 text-neutral-50">
      {/* <Header></Header> */}
      <Navbar />
      <main className="w-full flex-1 flex justify-center">
        <div className="w-full"> {/* Container to ensure full width */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomeLazy />} />
              <Route path="/about" element={<AboutLazy />} />
              <Route path="/contact" element={<ContactLazy />} />
              <Route path="/products" element={<ProductsLazy />} />
              <Route path="/services" element={<ServicesLazy />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
