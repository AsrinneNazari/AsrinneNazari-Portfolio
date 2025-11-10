
import ContactForm from "../components/contactForm";
import { ContactInfo } from "../components/ContactInfo";
import TechStack from "../components/TechStack";
import picToPortfolio from "./../img/picToPortfolio.jpg";
import { Projects } from "./Projects";

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

      <div className="techContentContainer">
      <div className="techInfo" id="techStack">
        Tech Stack
      </div>
        <div className="techContainer">
          <TechStack />
        </div>
      </div>
      <div className="projectContentContainer">
      <div className="projectInfo" id="projectInfo">
        Projects
      </div>
        <div className="projectContainer">
          <Projects />
        </div>
      </div>
      <div className="contactInfo" id="contactInfo">
        Contact me!
      </div>
      <div className="contactContentContainer">
        <div className="contactContainer">
          <ContactInfo/>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
