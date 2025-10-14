const TechStack = () => {
  const techStack = [
    {
      name: "JavaScript",
    },
    {
      name: "TypeScript",
    },
    {
      name: "CSS",
    },
    {
      name: "SCSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "React",
    },
    {
      name: "Vue",
    },
    {
      name: "Tailwind CSS",
    },
    {
      name: "Node.js",
    },
    {
      name: "Vite",
    },
    {
      name: "Next.js",
    },
    {
      name: "RESTful APIs",
    },
    {
      name: "JSON",
    },
    {
      name: "Git",
    },
    {
      name: "Supabase",
    },
    {
      name: "GitHub",
    },
    {
      name: "Netlify",
    },
    {
      name: "Figma",
    },
  ];

  return (
    <div className="techContainer">
      {techStack.map((tech) => (
        <div key={tech.name} className="tech">
          <div>{tech.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
