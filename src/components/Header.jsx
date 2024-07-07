import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 px-6 flex-row md:flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2" prefetch={false}>
        {/* <DatabaseIcon className="h-6 w-6" /> */}
        <span className="text-3xl font-semibold">Aqualia</span>
      </Link>
      <nav className="md:flex items-center gap-6">
        <Link to="/about" className="hover:underline" prefetch={false}>
          Who are we
        </Link>
        <Link to="/services" className="hover:underline" prefetch={false}>
          How can we help
        </Link>
        <Link to="/products" className="hover:underline" prefetch={false}>
          Products we built
        </Link>
        <Link to="/contact" className="hover:underline" prefetch={false}>
          Contact us
        </Link>
        {/* <Link href="#" className="hover:underline" prefetch={false}>
                    Contact
                </Link> */}
      </nav>
    </header>
  );
};

export default Header;
