export const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serifDM mb-4">
            Asrinne Nazari
          </h1>
          <h1 className="text-2xl md:text-4xl mb-2">Frontend developer</h1>
          <p className="text-sm md:text-base">
            Hi! I'm Asrinne, a frontend developer who transitioned from a career
            as an X-ray technician. With a strong foundation in HTML, CSS, and
            JavaScript, I create responsive and user-friendly websites. When I'm
            not coding, I enjoy walking in the woods to reset my mind.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            className="w-64 md:w-96"
            src="/src/img/picToPortfolio.jpg"
            alt="Portfolio"
          />
        </div>
      </div>
    </div>
  );
};
