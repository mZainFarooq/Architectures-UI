import React from "react";

const Home = () => {
  return (
    <section className="flex justify-center items-center relative">
      <img
        src="https://www.w3schools.com/w3images/architect.jpg"
        className="object-cover"
        alt=""
      />
      <div className="tracking-[4px] space-x-4 text-[36px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">
        <span className=" font-[Verdana-bold] py-2 px-4 bg-black/80 text-white">
          BR
        </span>
        <span className="text-white hidden sm:inline-block">Architects</span>
      </div>
    </section>
  );
};

export default Home;
