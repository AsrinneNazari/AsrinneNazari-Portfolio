import { NavLink } from "react-router-dom";

interface INavLinkProps {
  click?: () => void;
}

const Nav = ({ click }: INavLinkProps) => {
  return (
    <div className="w-screen bg-white shadow-md">
      <div className="flex justify-center items-center gap-x-20 h-15 mx-auto py-5 m-8">
        <NavLink
          to="/"
          className="relative text-2xl hover:opacity-70 transition-opacity"
          onClick={click}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="relative text-2xl hover:opacity-70 transition-opacity"
          onClick={click}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="relative text-2xl hover:opacity-70 transition-opacity"
          onClick={click}
        >
          Contact me
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
