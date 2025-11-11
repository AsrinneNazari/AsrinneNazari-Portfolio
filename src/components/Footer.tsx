import github from "/src/img/icons8-github-50.png";
import linkedin from "/src/img/icons8-linkedin-50.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <a
          href="https://linkedin.com/in/asrinne-nazari"
          aria-label="Linked in"
          className="footerIcon"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/AsrinneNazari"
          aria-label="Github"
          className="footerIcon"
        >
          <img src={github} alt="github" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;