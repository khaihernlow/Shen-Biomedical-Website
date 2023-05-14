import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardList = ({ data }) => {
  return (
    <>
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
};

const allProjects = [
  {
    id: 1,
    imgLink:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    imgAlt: "Brain",
    tag: "Research",
    title: "Brain Tumors and Cancer Studies: Symptoms, Treatments, Trends",
    link: "https://docs.google.com/presentation/d/1nsVS-RYdACdUWeHyZEb8Wk42vw_7N9acb44Ht2jxfU8/edit#slide=id.p",
  },
  {
    id: 2,
    imgLink:
      "https://images.unsplash.com/photo-1518197844174-fc473cbbfd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    imgAlt: "Quantum Dots",
    tag: "Research",
    title:
      "Biomedical Applications of Quantum Dots: Attributes, Practical Usage, Cyto-toxicity Assays",
    link: "https://docs.google.com/presentation/d/1ndPIjD1rENPs3o29l2FQA_PP4Cvm-O916d1wO_Y-b-I/edit",
  },
  {
    id: 3,
    imgLink: "https://i.ytimg.com/vi/UlrPKnRzeQQ/maxresdefault.jpg",
    imgAlt: "BOCES New Visions Program",
    tag: "GuestSpeaker",
    title: "BOCES New Vision with Speaker Thomas Slavic",
    link: "https://docs.google.com/document/d/10_iX6jMc-JAKxMtpDN_IRqeHrJVfKn3ql4ny-NbYETk/edit",
  },
];

const Research = () => {
  return (
    <section className="ml-2.5 mr-0 lg:mx-[70px] xl:mx-auto lg:flex block gap-2 max-w-screen-xl">
      <div className="w-full lg:w-64 font-semibold text-2xl text-zinc-700 lg:mb-0 mb-4">
        Explore some of our Research & Experiences
      </div>
      <div className="flex-1 relative">
        <p className="font-medium text-gray-600 text-lg mb-2">
          Enthusiasts in Biomedical Research Club research hotspots within the
          industry
        </p>
        <div className="flex lg:flex-wrap overflow-x-auto no-scrollbar gap-4">
          <ProjectCardList data={allProjects} />
        </div>
        <button className="mt-4 px-3 py-3 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition text-base font-semibold border-solid border-2 border-blue-600">
          See all our research
        </button>
      </div>
    </section>
  );
};

export default Research;
