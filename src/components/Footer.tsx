const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 h-10">
      <div className="container mx-auto flex justify-center items-center h-full">
        <p className="text-center">© {new Date().getFullYear()} Asrinne Nazari</p>
      </div>
    </footer>
  );
};
export default Footer;
