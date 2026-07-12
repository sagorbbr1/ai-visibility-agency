import { NavLink } from "react-router-dom";

const links = [
  { title: "Blogs", path: "/blogs" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Pricing", path: "/pricing" },
];

const NavLinks = ({ mobile = false, onClick }) => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClick}
          className={({ isActive }) =>
            `
            ${mobile ? "block py-4 border-b last:border-b-0" : ""}
            font-medium transition-all
            ${
              isActive
                ? "text-[#111827]"
                : "text-gray-600"
            }
            hover:text-[#111827]
          `
          }
        >
          {link.title}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;