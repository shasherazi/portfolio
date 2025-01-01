import { PiArrowUpRight, PiGithubLogo, PiGlobeSimple } from 'react-icons/pi';

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project Name",
      description: "A detailed description of the project that explains the problem it solves and its key features. This can be 2-3 sentences long to give enough context.",
      longDescription: "More detailed explanation of the project's architecture, challenges overcome, and your specific role in development.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoh4oHahMvhwIZ-i5hKe3J8YzIShLy7ERO5Q&s",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      links: {
        live: "https://project-demo.com",
        github: "https://github.com/username/project"
      },
      metrics: {
        users: "1000+",
        stars: "50+",
        contributions: "80+ commits"
      },
      role: "Lead Developer",
      duration: "3 months"
    }
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-nowrap w-full h-full overflow-x-auto snap-x snap-mandatory">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative flex-shrink-0 w-screen h-screen snap-center px-20 max-sm:px-10 pt-24"
        >
          <div className="h-full flex flex-col justify-between pb-24">
            {/* Top section with title and description */}
            <div>
              <h2 className="text-4xl font-bold mb-8">{project.title}</h2>
              <p className="text-xl max-w-2xl">{project.description}</p>
            </div>

            {/* Middle section with image */}
            <div className="flex-1 flex items-center justify-center py-12">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[60vh] w-auto object-cover rounded-lg"
              />
            </div>

            {/* Bottom section with tech stack and links */}
            <div className="flex justify-between items-end">
              {/* Tech stack */}
              <div className="flex flex-wrap gap-4 max-w-xl">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm border border-current px-4 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-8 text-xl">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="hover:underline flex items-center gap-1"
                  >
                    visit
                    <PiArrowUpRight />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="hover:underline flex items-center gap-1"
                  >
                    code
                    <PiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
