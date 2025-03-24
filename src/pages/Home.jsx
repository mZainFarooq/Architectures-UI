import React from "react";

const Home = () => {
  return (
    <section id="home" className="flex justify-center items-center relative">
      <img
        src="https://www.w3schools.com/w3images/architect.jpg"
        className="object-cover"
        alt=""
      />
      <h2 className="tracking-[4px] font-serif space-x-4 !text-[36px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%] ">
        <span className="py-2 px-4 bg-black/80 text-[#f1f1f1]">
          <b>BR</b>
        </span>
        <span className="text-white  hidden sm:inline-block">Architects</span>
      </h2>
    </section>
  );
};

export default Home;
