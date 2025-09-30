import picToPortfolio from "./../img/picToPortfolio.jpg";

export const Home = () => {
  return (
    <div className="mainContainer">
      <div className="mainContentContainer">
        <div className="bioContainer">
          <h1 className="mainHeader">Asrinne Nazari</h1>
          <h1 className="subHeader">Front-end developer</h1>
          <p className="mainBio">
            Hi! I’m Asrinne, a frontend developer who transitioned from a career
            as an X-ray technician. With a strong foundation in HTML, CSS, and
            JavaScript, I create responsive, user-friendly websites that deliver
            great user experiences. I’m curious and engaged, with over 9 years
            of experience working in collaborative teams. When I’m not coding,
            you’ll often find me walking in the woods to reset my mind. I also
            have a passion for gardening and spending a lot of time in my
            allotment.
          </p>
        </div>

        <div className="mainPic">
          <img src={picToPortfolio} alt="picToPortfolio" />
        </div>
      </div>
      <div>
        <div className="techInfo">Tech Stack</div>
        <div className="techContentContainer">
        <div className="techContainer">
          <img src="/src/img/html5-icon.png" alt="html5" />
          <img src="/src/img/CSS-icon.png" alt="css" />
          <img src="/src/img/JS-icon.png" alt="javascript" />
          <img src="/src/img/" alt="react" />
          <img src="/src/img/Vue-icon.png" alt="vue" />
        </div>
        </div>
      </div>
    </div>
  );
};
