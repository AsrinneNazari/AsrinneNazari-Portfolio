interface Project {
  title: string;
  imageUrl: string;
  projectUrl: string;
}

type ProjectCardProps = Project;

const ProjectCard = ({ title, imageUrl, projectUrl }: ProjectCardProps) => {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm w-full"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl || "/api/placeholder/400/320"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30"> 
          <h3 className="text-xl font-semibold text-black">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2"></div>
      </div>
    </a>
  );
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Plumbersite - Mello Rör AB",
      imageUrl: "/src/img/melloror.jpg",
      projectUrl: "https://melloro.netlify.app",
    },
    {
      title: "The Zoo",
      imageUrl: "/src/img/zoo.jpg",
      projectUrl: "https://thezoopage.netlify.app",
    },
    {
      title: "Internship search page",
      imageUrl: "/src/img/intern.jpg",
      projectUrl: "https://internshipsearch.netlify.app/",
    },
    {
      title: "Tic Tac Toe",
      imageUrl: "/src/img/tictac.jpg",
      projectUrl: "https://tici-tac-toe.netlify.app/",
    },
    {
      title: "Movie search page",
      imageUrl: "/src/img/moviepage.jpg",
      projectUrl: "https://asrinnenazari.github.io/moviePage/",
    },
    {
      title: "Webshop",
      imageUrl: "/src/img/flowershop.jpg",
      projectUrl: "https://asrinnenazari.github.io/the-webshop-flower-main/",
    },
    {
      title: "My first portfolio",
      imageUrl: "/src/img/oldport.jpg",
      projectUrl: "https://asrinnenazari.github.io/Portfolio/",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium mb-12 text-center mb-20">My projects</h2>
        <div className="h-20"></div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-6xl">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
