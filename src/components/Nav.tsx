import { useState } from "react";
import { Menu, X } from "lucide-react";

interface INavLinkProps {
  onTech?: () => void;
  onProjects?: () => void;
  onContact?: () => void;
}

const Nav = ({ onTech, onProjects, onContact }: INavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleClick = (callback?: () => void) => {
    callback?.();
    setIsOpen(false);
  };

  return (
    <>
<div className="navbar">
  <div className="navbarInner">
    <div className="navbarLinks">
      <div className="navlink" onClick={handleHomeClick}>Home</div>
      <div className="navlink" onClick={() => handleClick(onTech)}>Tech Stack</div>
      <div className="navlink" onClick={() => handleClick(onProjects)}>Projects</div>
      <div className="navlink" onClick={() => handleClick(onContact)}>Contact</div>
    </div>

    <div className="hamburger" onClick={() => setIsOpen(true)}>
      <Menu size={26} color="var(--text-muted)" />
    </div>
  </div>
</div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide menu */}
      <div className={`sideMenu ${isOpen ? "open" : ""}`}>
        <div className="closeIcon" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </div>

        <div className="navlink" onClick={handleHomeClick}>Home</div>
        <div className="navlink" onClick={() => handleClick(onTech)}>Tech Stack</div>
        <div className="navlink" onClick={() => handleClick(onProjects)}>Projects</div>
        <div className="navlink" onClick={() => handleClick(onContact)}>Contact</div>
      </div>
    </>
  );
};

export default Nav;