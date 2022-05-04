import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectData";

function Projects() {
  return (
    <section className="flex flex-col items-center dark:text-white font-medium mb-10">
      <h1 className="h1 pb-10 mt-6" data-aos="fade-down">
        Projects
      </h1>
      <div className="projects-container sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid gap-8 p-5">
        {projectsData.map((object) => {
          return (
            <ProjectCard
              name={object.name}
              description={object.description}
              url={object.url}
              githubLink={object.githubLink}
              key={object.name}
              imageLink={object.imageLink}
              technologies={object.technologies}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
