interface INavLinkProps {
  onTech?: () => void;
  onProjects?: () => void;
  onContact?: () => void;
}

const Nav = ({ onTech, onProjects, onContact }: INavLinkProps) => {
  return (
    <div className="navbar">
      <div className="navbarLinks">
        <div
          className="navlink"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </div>

        <div className="navlink" onClick={onTech}>
          Tech Stack
        </div>

        <div className="navlink" onClick={onProjects}>
          Projects
        </div>

        <div className="navlink" onClick={onContact}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Nav;
