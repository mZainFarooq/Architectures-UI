import React from "react";
import HouseCard from "../components/HouseCard";
import { houses } from "../Utils";

const Projects = () => {
  return (
    <section id="projects" className="px-8">
      <div className="py-4">
        <h1 className="py-8">Projects</h1>
        <hr className=" border-gray-200" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {houses.map((house, index) => (
          <HouseCard key={index} image={house.image} title={house.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
