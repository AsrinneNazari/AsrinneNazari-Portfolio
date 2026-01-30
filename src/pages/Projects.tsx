import melloror from "/src/img/melloror.jpg";
import zoo from "/src/img/zoo.jpg";
import intern from "/src/img/intern.jpg";
import tictac from "/src/img/tictac.jpg";
import moviepage from "/src/img/moviepage.jpg";
import marianco from "/src/img/marianco.jpg"
import neovici from "/src/img/neovicipic.jpg"
import { Film, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  image: string;
  projectUrl?: string;
  videoUrl?: string;
  description: string;
  github?: string;
  code: string[];
}

type ProjectCardProps = Project;

const ProjectCard = ({
  title,
  image,
  projectUrl,
  description,
  videoUrl,
  github,
  code,
}: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="projectCard">
        {projectUrl ? (
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
        ) : (
          <div className="projectCardImageContainer">
            <img src={image} alt={title} />
            <div className="projectCardOverlay">
              <h3>{title}</h3>
            </div>
          </div>
        )}

        <div className="projectCardContent">
          <p>{description}</p>

          <ul className="codeList">
            {code.map((item) => (
              <li key={item} className="codeTag">
                {item}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="githubButton"
              >
                GitHub <Github size={16} />
              </a>
            )}

            {videoUrl && (
              <button
                className="githubButton"
                onClick={() => setShowVideo(true)}
                type="button"
              >
                Watch demo <Film />
              </button>
            )}
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="modal-overlay" onClick={() => setShowVideo(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="videoWrapper">
              <iframe
                src={videoUrl}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Marianco",
      image: marianco,
      projectUrl: "https://www.marianco.org/",
      description: "Volunteer work: improving website interactivity, implementing a donation system, handling translations, and maintaining the codebase (bug fixes and improvements).",
      code:["Next.js", "Typescript", "TailwindCSS", "Strapi","API", "CMS", "HTML"]
    },
    {
      title: "Neovici - Internship Demo",
      image: neovici,
      description: "Short walkthrough of a feature I worked on during my frontend internship.",
      videoUrl: "https://player.vimeo.com/video/1159793079",
      code:["lit-html", "Typescript", "React hooks", "Web components", "SCSS", "API", "HTML"]
    },
    {
      title: "Plumbersite - Mello Rör AB",
      image: melloror,
      projectUrl: "https://melloro.netlify.app",
      description: "Freelance for a plumber company. Part of my thesis",
      github:"https://github.com/AsrinneNazari/plumber-project",
      code:["React","Typescript","TailwindCSS","Supabase", "HTML"]
    },
    {
      title: "The Zoo",
      image: zoo,
      projectUrl: "https://thezoopage.netlify.app",
      description: "School project: Showing animals and feed them",
      github:"https://github.com/AsrinneNazari/react-the-zoo-AsrinneNazari",
      code:["React", "Typescript", "SCSS", "API", "HTML"]
    },
    {
      title: "Internship search page",
      image: intern,
      projectUrl: "https://internshipsearch.netlify.app/",
      description: "School group project: Internship search platform",
      github:"https://github.com/AsrinneNazari/case-af-group-3-main",
      code:["React", "API", "Arbetsförmedlingen design systems", "HTML"]
    },
    {
      title: "Tic Tac Toe",
      image: tictac,
      projectUrl: "https://tici-tac-toe.netlify.app/",
      description: "School project: Tic Tac Toe game",
      github:"https://github.com/AsrinneNazari/vue-tic-tac-toe-AsrinneNazari",
      code:["Vue.js","SCSS", "HTML"]
    },
    {
      title: "Movie search page",
      image: moviepage,
      projectUrl: "https://asrinnenazari.github.io/moviePage/",
      description: "Created a movie search page while learning API fetching",
      github:"https://github.com/AsrinneNazari/moviePage",
      code:["Typescript", "API", "HTML", "CSS"]
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
