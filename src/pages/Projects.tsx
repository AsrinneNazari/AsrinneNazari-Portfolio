import melloror from "/src/img/melloror.jpg";
import zoo from "/src/img/zoo.jpg";
import intern from "/src/img/intern.jpg";
import tictac from "/src/img/tictac.jpg";
import moviepage from "/src/img/moviepage.jpg";
import flowershop from "/src/img/flowershop.jpg";

interface Project {
  title: string;
  image: string;
  projectUrl: string;
}

type ProjectCardProps = Project;

const ProjectCard = ({ title, image, projectUrl }: ProjectCardProps) => {
  return (
    <a
  href={projectUrl}
  target="_blank"
  className="projectCard"
>
  <div className="projectCardImageContainer">
    <img src={image} alt={title} />
    <div className="projectCardOverlay">
      <h3>{title}</h3>
    </div>
  </div>
</a>
  );
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Plumbersite - Mello Rör AB",
      image: melloror,
      projectUrl: "https://melloro.netlify.app",
    },
    {
      title: "The Zoo",
      image: zoo,
      projectUrl: "https://thezoopage.netlify.app",
    },
    {
      title: "Internship search page",
      image: intern,
      projectUrl: "https://internshipsearch.netlify.app/",
    },
    {
      title: "Tic Tac Toe",
      image: tictac,
      projectUrl: "https://tici-tac-toe.netlify.app/",
    },
    {
      title: "Movie search page",
      image: moviepage,
      projectUrl: "https://asrinnenazari.github.io/moviePage/",
    },
    {
      title: "Webshop",
      image: flowershop,
      projectUrl: "https://asrinnenazari.github.io/the-webshop-flower-main/",
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
