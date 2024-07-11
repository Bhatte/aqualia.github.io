import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <header className="py-4 px-6 flex-row md:flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" prefetch={false}>
          {/* <DatabaseIcon className="h-6 w-6" /> */}
          <span className="text-3xl font-semibold">Aqualia</span>
        </Link>
        <nav className="md:flex items-center gap-6">
          <Link
            to="/about"
            className="text-neutral-50 hover:text-white"
            prefetch={false}
          >
            Who are we
          </Link>
          <Link
            to="/services"
            className="text-neutral-50 hover:text-white"
            prefetch={false}
          >
            How can we help
          </Link>
          <Link
            to="/products"
            className="text-neutral-50 hover:text-white"
            prefetch={false}
          >
            Products we built
          </Link>
          <Link
            to="/contact"
            className="text-neutral-50 hover:text-white"
            prefetch={false}
          >
            Contact us
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
