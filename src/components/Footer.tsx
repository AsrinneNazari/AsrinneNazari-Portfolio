import github from "/src/img/icons8-github-50.png";
import instagram from "/src/img/icons8-instagram-logo-50.png";
import linkedin from "/src/img/icons8-linkedin-50.png";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-2 min-h-10">
      <div className="flex justify-center items-center h-full gap-x-6">
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
      </div>
    </footer>
  );
};
export default Footer;
