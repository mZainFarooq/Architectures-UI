import React from "react";

const TeamCard = ({ member, index }) => {
  return (
    <div key={index}>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-60 object-cover brightness-[0.6]"
      />
      <div className="space-y-2 mt-4 text-[15px]">
        <h3 className="text-[20px] font-semibold">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
        <p className=" mt-2">{member.description}</p>
        <button className="cursor-pointer mt-4 bg-gray-200 w-full py-2 font-medium text-black hover:bg-gray-300">
          Contact
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
