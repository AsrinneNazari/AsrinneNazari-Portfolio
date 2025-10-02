import { NavLink } from "react-router-dom";

interface INavLinkProps {
  click?: () => void;
}

const Nav = ({ click }: INavLinkProps) => {
  return (
    <div className="navbar">
      <div className="navbarLinks">
        <NavLink to="/" className="navlink" onClick={click}>
          Home
        </NavLink>
        <a href="#techStack" className="navlink" onClick={click}>
          Tech Stack
        </a>
        <a href="#projectInfo" className="navlink" onClick={click}>
          Projects
        </a>

        <a href="#contactInfo" className="navlink" onClick={click}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
