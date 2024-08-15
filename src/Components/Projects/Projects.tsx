import Nav from "../Nav/Nav";
import React from "../../assets/React.svg";

const Projects = () => {
  return (
    <div>
      <Nav variation={2} />
      <div className="h-24 w-full"></div> {/* nav filler */}
      <div className="m-20 flex flex-wrap items-center justify-around gap-x-5 gap-y-20">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            className="relative h-96 min-w-[500px] rounded-xl border-2 border-white"
            key={index}
          >
            <div className="absolute -left-1 -top-8 flex h-20 w-20 items-center justify-center rounded-xl border-2 border-white bg-stone-950">
              <img src={React} className="w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
