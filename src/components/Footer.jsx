import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="p-4 text-center transition-colors duration-500">
        <span>© 2024 Copyright : </span>
        <Link class="font-semibold text-primary dark:text-white" to="/">
          Aqualia.ie
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
