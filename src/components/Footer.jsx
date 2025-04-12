import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="p-4 text-center text-neutral-400">
        <span>© 2025 Copyright : </span>
        <Link className="font-semibold text-neutral-50 hover:text-neutral-200 transition-colors duration-300" to="/">
          Aqualia.ie
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
