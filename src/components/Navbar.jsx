import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobilemenushow, setMobileMenustate] = useState(false);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={(e) => setMobileMenustate((_prev) => !_prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.
            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.
            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="flex items-center gap-2" prefetch={false}>
                {/* <DatabaseIcon className="h-6 w-6" /> */}
                <span className="text-3xl font-semibold">Aqualia</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/about"
                  className="text-neutral-50 hover:text-white py-2"
                  prefetch={false}
                >
                  Who are we
                </Link>
                <Link
                  to="/services"
                  className="text-neutral-50 hover:text-white py-2"
                  prefetch={false}
                >
                  How can we help
                </Link>
                <Link
                  to="/products"
                  className="text-neutral-50 hover:text-white py-2"
                  prefetch={false}
                >
                  Products we built
                </Link>
                <Link
                  to="/contact"
                  className="text-neutral-50 hover:text-white py-2"
                  prefetch={false}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {mobilemenushow && (
        <div
          className="sm:hidden transition ease-out duration-100"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              to="/about"
              className="block text-neutral-50 hover:text-white px-3 py-2"
              prefetch={false}
            >
              Who are we
            </Link>
            <Link
              to="/services"
              className="block text-neutral-50 hover:text-white px-3 py-2"
              prefetch={false}
            >
              How can we help
            </Link>
            <Link
              to="/products"
              className="block text-neutral-50 hover:text-white px-3 py-2"
              prefetch={false}
            >
              Products we built
            </Link>
            <Link
              to="/contact"
              className="block text-neutral-50 hover:text-white px-3 py-2"
              prefetch={false}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
