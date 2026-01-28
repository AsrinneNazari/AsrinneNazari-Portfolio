import melloror from "/src/img/melloror.jpg";
import zoo from "/src/img/zoo.jpg";
import intern from "/src/img/intern.jpg";
import tictac from "/src/img/tictac.jpg";
import moviepage from "/src/img/moviepage.jpg";
import { Github } from "lucide-react";

interface Project {
  title: string;
  image: string;
  projectUrl: string;
  description: string;
  github?: string;
  code: string[];
}

type ProjectCardProps = Project;

const ProjectCard = ({ title, image, projectUrl, description, github, code}: ProjectCardProps) => {
 return (
    <div className="projectCard">
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="projectCardLink"
      >
        <div className="projectCardImageContainer">
          <img src={image} alt={title} />
          <div className="projectCardOverlay">
            <h3>{title}</h3>
          </div>
        </div>
      </a>

      <div className="projectCardContent">
        <p>{description}</p>
        <ul className="codeList">
        {code.map((item)=>(
          <li key={item} className="codeTag">
            {item}
          </li>
        ))}
        </ul>
{github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="githubButton"
    >
      GitHub <Github />
    </a>
  )}
</div>
    </div>
  );
};
export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Marianco",
      image: melloror,
      projectUrl: "https://www.marianco.org/",
      description: "Vulenteering work",
      github:"",
      code:["Next.js", "Typescript", "TailwindCSS", "Strapi", "CMS"]
    },
    {
      title: "Plumbersite - Mello Rör AB",
      image: melloror,
      projectUrl: "https://melloro.netlify.app",
      description: "Freelance",
      github:"https://github.com/AsrinneNazari/moviePage",
      code:["React","Typescript","TailwindCSS","Supabase"]
    },
    {
      title: "The Zoo",
      image: zoo,
      projectUrl: "https://thezoopage.netlify.app",
      description: "School project",
      github:"githublink",
      code:["React", "SCSS"]
    },
    {
      title: "Internship search page",
      image: intern,
      projectUrl: "https://internshipsearch.netlify.app/",
      description: "School project",
      github:"githublink",
      code:["React", ""]
    },
    {
      title: "Tic Tac Toe",
      image: tictac,
      projectUrl: "https://tici-tac-toe.netlify.app/",
      description: "School project",
      github:"githublink",
      code:["Vue.js","SCSS"]
    },
    {
      title: "Movie search page",
      image: moviepage,
      projectUrl: "https://asrinnenazari.github.io/moviePage/",
      description: "Search for a movie page",
      github:"https://github.com/AsrinneNazari/moviePage",
      code:["Typescript"]
    },
  ];

  return (
  <div className="projectsSection">
    <div className="projectsWrapper">
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </div>
);
};
