import { NavLink } from "react-router-dom";
import github from "/src/img/icons8-github-50.png";
import instagram from "/src/img/icons8-instagram-logo-50.png";
import linkedin from "/src/img/icons8-linkedin-50.png";

interface INavLinkProps {
  click: () => void;
}

const Nav = ({ click }: INavLinkProps) => {
  return (
    <div className="flex justify-end items-center w-full py-5">
      <NavLink to="/" className="relative text-lg" onClick={click}>
        Home
      </NavLink>
      <NavLink to="/projects" className="relative text-lg" onClick={click}>
        Projects
      </NavLink>
      <a
        href="https://linkedin.com/in/asrinne-nazari"
        aria-label="Linked in"
        className="w-8 h-8 hover:opacity-70 transition-opacity"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/AsrinneNazari"
        aria-label="Github"
        className="w-8 h-8 hover:opacity-70 transition-opacity"
      >
        <img src={github} alt="github" />
      </a>
      <a
        href="https://www.instagram.com/asrinne"
        aria-label="Instagram"
        className="w-8 h-8 hover:opacity-70 transition-opacity"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <button className="bg-purple-400 text-white py-4 px-6 rounded hover:bg-purple-600 transition-colors duration-300">
        Mitt CV
      </button>
    </div>
  );
};

export default Nav;
