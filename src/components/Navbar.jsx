import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const logoVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const navItemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: 0.2 + (custom * 0.1),
      ease: "easeOut"
    }
  }),
  hover: {
    y: -2,
    transition: { duration: 0.2 }
  }
};

const underlineVariants = {
  initial: { width: 0 },
  animate: { width: "100%", transition: { duration: 0.3 } },
  exit: { width: 0, transition: { duration: 0.3 } }
};

const Navbar = () => {
  const [mobilemenushow, setMobileMenustate] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar transparency based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenustate(false); // Close the navigation panel
  }, [pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-40 ${scrolled ? 'bg-neutral-900/80 backdrop-blur-md' : 'bg-transparent'} transition-all duration-300`}
    >
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={(e) => setMobileMenustate((_prev) => !_prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <AnimatePresence mode="wait" initial={false}>
                {!mobilemenushow ? (
                  <motion.svg
                    key="menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="h-6 w-6"
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
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="close"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="h-6 w-6"
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
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="animate"
              >
                <Link to="/" className="flex items-center gap-2" prefetch={false}>
                  <span className="text-3xl font-semibold text-neutral-100">Aqualia</span>
                </Link>
              </motion.div>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-6">
                {[
                  { to: "/about", text: "Who are we" },
                  { to: "/services", text: "How can we help" },
                  { to: "/products", text: "Products we built" },
                  { to: "/contact", text: "Contact us" }
                ].map((link, index) => (
                  <motion.div 
                    key={link.to}
                    variants={navItemVariants}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="relative"
                  >
                    <Link
                      to={link.to}
                      className="text-neutral-50 hover:text-white py-2 transition-colors duration-300"
                      prefetch={false}
                    >
                      {link.text}
                      {pathname === link.to && (
                        <motion.div
                          layoutId="navbar-underline"
                          className="absolute bottom-0 left-0 h-0.5 bg-neutral-400"
                          variants={underlineVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobilemenushow && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden"
            id="mobile-menu"
          >
            <motion.div 
              className="space-y-1 px-2 pb-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {[
                { to: "/about", text: "Who are we" },
                { to: "/services", text: "How can we help" },
                { to: "/products", text: "Products we built" },
                { to: "/contact", text: "Contact us" }
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1), duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${pathname === link.to ? 'bg-neutral-700 text-white' : 'text-neutral-50 hover:bg-neutral-800 hover:text-white'}`}
                    prefetch={false}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
