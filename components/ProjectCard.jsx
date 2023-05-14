import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex-none project_card w-[300px] h-[410px] bg-white border-solid border-2 border-black rounded-2xl">
      <img
        src={project.imgLink}
        alt={project.imgAlt}
        width={300}
        height={0}
        className="object-cover rounded-t-2xl px-px pt-px h-40"
      />

      <p className="text-blue-600 font-medium text-base mb-2.5 mx-5 mt-5">
        #{project.tag}
      </p>

      <a href={project.link} target="_blank">
        <p className="text-zinc-700 font-medium text-base mx-5 leading-5 underline">
          {project.title}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
