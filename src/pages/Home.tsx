import { motion } from "motion/react";
import { useRef } from "react";
import { ContactInfo } from "../components/ContactInfo";

import TechStack from "../components/TechStack";
import picToPortfolio from "./../img/picToPortfolio.jpg";
import Nav from "../components/Nav";
import { Projects } from "./Projects";
import ContactForm from "../components/ContactForm";


export const Home = () => {
  const techRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

   const scrollToTech = () =>
    techRef.current?.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    projectRef.current?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  return (<>
  <Nav
        onTech={scrollToTech}
        onProjects={scrollToProjects}
        onContact={scrollToContact}
      />
    
    <div className="mainContainer">
      <div className="mainContentContainer">
        <div className="bioContainer">
                    <motion.h1
      className="mainHeader"
      initial={{ x: 200, opacity: 0 }}  
      animate={{ x: 0, opacity: 1 }}    
      transition={{ duration: 0.7, ease: "easeOut" }} 
    >
      Asrinne Nazari
    </motion.h1>
          <motion.h1
      className="subHeader"
      initial={{ x: -200, opacity: 0 }}   
      animate={{ x: 0, opacity: 1 }}      
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      Front-end developer
    </motion.h1>
          <p className="mainBio">
            Hi! I’m Asrinne, a frontend developer who transitioned into tech after several years working as an X-ray technician. My background in healthcare has given me a strong sense of responsibility, attention to detail, and long experience of working closely in multidisciplinary teams.

Today, I focus on building responsive and user-friendly interfaces, mainly in React, and I’m currently expanding my skills in Next.js. I enjoy working thoughtfully with code, paying attention to structure, usability, and the small details that make a difference for the user.

I’m a curious and engaged team player, and I value clear communication and collaboration. Outside of coding, I recharge by walking in the woods and spending time in my allotment.
          </p>
        </div>
        <div className="mainPic">
          <img src={picToPortfolio} alt="picToPortfolio" />
        </div>
      </div>
         <div className="resumeContainer">
          <a className="resumeLink"
  href="/AsrinneNazariResume_.pdf"
  download
>
  Download my resume
</a>
</div>
        <section className="techInfo" ref={techRef}>Tech Stack</section>
      <div className="techContentContainer">
        <div className="techContainer">
          <TechStack />
        </div>
      </div>
      <section className="projectInfo" ref={projectRef}>
        Projects
      </section>
      <div className="projectContentContainer">
        <div className="projectContainer">
          <Projects />
        </div>
      </div>
      
        <section className="contactInfo" ref={contactRef}>Contact me</section>
      <div className="contactContentContainer">
        <div className="contactContainer">
          <ContactInfo/>
          <ContactForm/>
        </div>
      </div>
    </div>
    </>
  );
};
