import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "top-4" : "top-0"
      }`}
    >
      {/* Floating Navbar */}

      {scrolled ? (
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-between px-6 py-3">
              <Logo />

              {/* Desktop Menu */}

              <nav className="hidden lg:flex gap-10">
                <NavLinks />
              </nav>

              <div className="flex items-center gap-4">
                {/* Desktop Button */}

                <button className="hidden lg:block rounded-xl bg-[#111827] px-7 py-3 text-white transition hover:bg-black">
                  <a href="#pricing">Pricing</a>
                </button>

                {/* Mobile Toggle */}

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="text-3xl lg:hidden"
                >
                  {mobileOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Normal Navbar */

        <div className="w-full border-b border-gray-200 bg-white transition-all duration-500">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            <Logo />

            <nav className="hidden lg:flex gap-10">
              <NavLinks />
            </nav>

            <div className="flex items-center gap-4">
              {/* Desktop Button */}

              <button className="hidden lg:block rounded-xl bg-[#111827] px-7 py-3 text-white transition hover:bg-black">
                <a href="#audit">Get Free Audit</a>
              </button>

              {/* Mobile Toggle */}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-3xl lg:hidden"
              >
                {mobileOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100 mt-3"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div
          className={`${
            scrolled ? "mx-auto max-w-7xl px-5" : "px-5"
          }`}
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6">
            <nav className="flex flex-col gap-5">
              <NavLinks
                mobile
                onClick={() => setMobileOpen(false)}
              />
            </nav>

            <button className="mt-6 w-full rounded-xl bg-[#111827] py-3 font-semibold text-white hover:bg-black transition">
              <a href="#audit" onClick={() => setMobileOpen(false)}>
                Get Free Audit
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;