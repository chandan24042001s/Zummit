import * as React from "react";
import { Link } from "react-router-dom";

function NavigationLink({ children, href = "#" }) {
    return (
      <a href={href} className="grow cursor-pointer" tabIndex="0">
        {children}
      </a>
    );
  }

function Navbar() {
  const navLinks = [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Our Therapists", to: "/therapists" },
    { name: "Resources", to: "/resources" },
    { name: "FAQ", to: "/FAQs" },
 ];

  return (
    <header className="flex flex-col justify-center px-16 py-6 text-xl  font-light text-white whitespace-nowrap bg-cyan-600 max-md:px-5">
      <nav className="flex gap-8 justify-between items-center mr-4 ml-5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <a href="/" className="self-start max-w-full aspect-[5.88] w-[218px] transition ease-in-out duration-500 hover:scale-105">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb58034307f07517c9e0c497e461fc4e31eb7bf01576cfcb2c328b28bd1eb1d?apiKey=cf8fdc45d1bf4d769195b26a1a492d1c&"
            alt="Company Logo"
          />
        </a>
        <div className="flex gap-8 justify-between items-center  max-md:flex-wrap max-md:max-w-full">
        {navLinks.map((link) => (
            <Link to={link.to} key={link.name} className="transition ease-in-out duration-700 hover:scale-110">
              <h1>{link.name}</h1>
            </Link>
          ))}
          <button className="justify-center self-stretch px-4 py-2 text-lg text-black bg-yellow rounded-lg transition ease-in-out duration-500 hover:scale-105" tabIndex="0">
            Login/Signup
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
