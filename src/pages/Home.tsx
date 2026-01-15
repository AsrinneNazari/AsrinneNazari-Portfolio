
import ContactForm  from "../components/ContactForm";
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
            Hi! I’m Asrinne, a frontend developer who transitioned into tech after several years working as an X-ray technician. My background in healthcare has given me a strong sense of responsibility, attention to detail, and long experience of working closely in multidisciplinary teams.

Today, I focus on building responsive and user-friendly interfaces, mainly in React, and I’m currently expanding my skills in Next.js. I enjoy working thoughtfully with code, paying attention to structure, usability, and the small details that make a difference for the user.

I’m a curious and engaged team player, and I value clear communication and collaboration. Outside of coding, I recharge by walking in the woods and spending time in my allotment, where gardening is a big passion of mine.
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
