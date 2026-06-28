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
  {scrolled ? (
    // Floating Navbar
    <div className="max-w-7xl mx-auto px-5">
      <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-2xl transition-all duration-500">
        <div className="flex items-center justify-between px-8 py-3">
          <Logo />

          <nav className="hidden lg:flex gap-10">
            <NavLinks />
          </nav>

          <button className="hidden lg:block rounded-xl bg-[#111827] px-7 py-3 text-white">
            Pricing
          </button>
        </div>
      </div>
    </div>
  ) : (
    // Full Width Navbar
    <div className="w-full border-b border-gray-200 bg-white transition-all duration-500">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden lg:flex gap-10">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-4">
  {/* Desktop Button */}
  <button className="hidden lg:block rounded-xl bg-[#111827] px-7 py-3 text-white transition hover:bg-black">
   Get Free Audit
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
  {mobileOpen && (
  <div className="lg:hidden mt-3 px-5">
    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6">

      <nav className="flex flex-col gap-5">
        <NavLinks mobile />
      </nav>

      <button className="mt-6 w-full rounded-xl bg-[#111827] py-3 font-semibold text-white">
        Get Free Audit
      </button>

    </div>
  </div>
)}
</header>
  );
};

export default Navbar;