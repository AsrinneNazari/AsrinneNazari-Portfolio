import picToPortfolio from "./../img/picToPortfolio.jpg";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Asrinne Nazari
          </h1>
          <h1 className="text-2xl md:text-4xl font-serif">
            Front-end developer
          </h1>
          <p className="text-sm md:text-base mt-6">
            Hi! I’m Asrinne, a frontend developer who transitioned from a career
            as an X-ray technician. With a strong foundation in HTML, CSS, and
            JavaScript, I create responsive, user-friendly websites that deliver
            great user experiences. I’m curious and engaged, with over 9 years
            of experience working in collaborative teams. When I’m not coding,
            you’ll often find me walking in the woods to reset my mind 🌳. I
            also have a passion for gardening, from herbs to lush greenery, and
            I’m always happy to share tips.
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

      <div className="py-20 text-center">Tech Stack</div>
      <div>html</div>
    </div>
  );
};
