import picToPortfolio from "./../img/picToPortfolio.jpg";

export const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Asrinne Nazari
          </h1>
          <h1 className="text-2xl md:text-4xl mb-2 font-serif">
            Front-end developer
          </h1>
          <p className="text-sm md:text-base">
            Hi! I'm Asrinne, a frontend developer who transitioned from a career
            as an X-ray technician. With a strong foundation in HTML, CSS, and
            JavaScript, I create responsive and user-friendly websites. When I'm
            not coding, I enjoy walking in the woods to reset my mind 🌳
          </p>
          <p>
            <button className="bg-purple-400 text-white py-4 px-6 w-15 rounded hover:bg-purple-600 transition-colors duration-300">
              My CV
            </button>
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={picToPortfolio}
            alt="picToPortfolio"
            className="w-64 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};
