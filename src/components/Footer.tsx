const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 h-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          
          <p>
            © {new Date().getFullYear()} Asrinne Nazari
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="www.linkedin.com/in/asrinne-nazari"
            aria-label="Linked in"
            className="hover:text-gray-400"
          >
            <img src="/src/img/icons8-linkedin-50.png" alt="linkedin"/>
          </a>
          <a
            href="https://github.com/AsrinneNazari"
            aria-label="Github"
            className="hover:text-gray-400"
          >
            <img src="/src/img/icons8-github-50.png"/>
          </a>
          <a
            href="https://www.instagram.com/asrinne"
            aria-label="Instagram"
            className="hover:text-gray-400"
          >
            <img src="/src/img/icons8-instagram-logo-50.png" alt="instagram"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
