import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = ({ logo, name, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="flex items-center justify-between px-3 lg:px-[10%] py-4 bg-[#00166a] text-white fixed z-10 w-full">
        {/* Logo */}
        <HashLink
          smooth
          to="/#home"
          className="flex items-center"
          scroll={(el) => {
            const yOffset = -70;
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto rounded-full bg-white"
          />
          <h1 className="ml-2 font-bold text-xl">{name}</h1>
        </HashLink>

        {/* Botão hamburguer (mobile) */}
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu de navegação */}
        <nav
          className={`absolute top-full left-0 w-full bg-[#00165A] md:bg-[#00166a] z-50 lg:static lg:block lg:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row md:gap-6 p-4 md:p-0 font-bold">
            {links.map((link, index) => (
              <li key={index}>
                <HashLink
                  onClick={closeMenu}
                  className="block py-2 px-4 hover:bg-blue-950 rounded md:hover:bg-transparent md:hover:opacity-75"
                  to={`/#${link.route}`}
                  smooth
                  scroll={(el) => {
                    const yOffset = -70;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="h-[70px]"></div>
    </>
  );
};

export default NavBar;
