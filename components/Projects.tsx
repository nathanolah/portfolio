import React from "react";
import bulletinBoardImg from "../public/assets/projects/bulletinboard-prj.jpg";
import portfolioImg from "../public/assets/projects/portfolio-prj.jpg";
import weatherapiImg from "../public/assets/projects/weatherapi-prj.jpg";
import tokenImg from "../public/assets/projects/token-prj.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-10">
      <div className="mx-auto max-w-4xl px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 font-semibold"></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Item */}
          <ProjectItem
            imageSrc={bulletinBoardImg}
            projectTitle={"Bulletin Board"}
            projectDesc={""}
            projectUrl={"https://nolah.xyz"}
            projectRepo={"https://github.com/nathanolah/post-app"}
          />
          <ProjectItem
            imageSrc={tokenImg}
            projectTitle={"Token Authentication & Authorization"}
            projectDesc={""}
            projectUrl={""}
            projectRepo={"https://github.com/nathanolah/jwt-auth"}
          />
          <ProjectItem
            imageSrc={weatherapiImg}
            projectTitle={"Weather API"}
            projectDesc={""}
            projectUrl={""}
            projectRepo={"https://github.com/nathanolah/weather-app"}
          />
          <ProjectItem
            imageSrc={portfolioImg}
            projectTitle={"Portfolio"}
            projectDesc={""}
            projectUrl={"https://nathanolah.com"}
            projectRepo={"https://github.com/nathanolah/portfolio"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
