import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface INavLinkProps {
  click: () => void;
}

const NavLinks = ({ click }: INavLinkProps) => {
  return (
    <>
      <NavLink to="/" className="relative text-lg" onClick={click}>
        Home
      </NavLink>
      <NavLink to="/about" className="relative text-lg" onClick={click}>
        About 
      </NavLink>
      <NavLink to="/projects" className="relative text-lg" onClick={click}>
        Projects
      </NavLink>
      <NavLink to="/contact" className="relative text-lg" onClick={click}>
        Contact
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-5 border-b border-gray-300">
      <nav className="md:flex md:justify-center flex-1">
        <div className="hidden md:flex gap-40">
          <NavLinks click={toggleBar} />
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col mt-4 w-full justify-center items-center md:hidden px-8 gap-12">
          <NavLinks click={toggleBar} />
        </div>
      )}
      <div className="absolute right-4 top-4 md:hidden">
        <button onClick={toggleBar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
  );
};

export default Nav;
