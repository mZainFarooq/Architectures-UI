import React from "react";
import { teamMembers } from "../Utils";
import TeamCard from "../components/TeamCard";

const About = () => {
  return (
    <section id="about" className="px-8 ">
      <div className="py-4">
        <div className="py-4">
          <h1 className=" py-8">About</h1>
          <hr className=" border-gray-200" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
