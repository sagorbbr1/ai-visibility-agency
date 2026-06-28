import { NavLink } from "react-router-dom";

const links = [
  { title: "Methodology", path: "/methodology" },
  { title: "Resources", path: "/resources" },
  { title: "Pricing", path: "/pricing" },
  { title: "Book a Call", path: "/book-call" },
];

const NavLinks = ({ mobile = false }) => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
         className={({ isActive }) =>
  `
  ${mobile ? "block py-4 border-b last:border-b-0" : ""}
  font-medium
  transition-all
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