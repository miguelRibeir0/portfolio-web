import Nav from "../Nav/Nav";
import React from "../../assets/React.svg";
import { Fade } from "react-awesome-reveal";
import Code from "../../assets/Code.svg";
import WebPage from "../../assets/WebPage.svg";
import Plus from "../../assets/Plus.svg";

const Projects = () => {
  return (
    <Fade>
      <div>
        <Nav variation={2} />
        <div className="h-32 w-full lg:h-24"></div> {/* nav filler */}
        <div className="m-2 flex flex-wrap items-center justify-around gap-x-5 gap-y-20 lg:m-20">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              className="relative h-96 min-w-[320px] rounded-xl border-2 border-white lg:min-w-[500px]"
              key={index}
            >
              <div
                className="absolute -left-[2px] -top-10 flex h-20 w-20 items-center justify-center rounded-xl border-2 border-white bg-stone-950"
                id="languages"
              >
                <img src={React} className="w-1/2" />
              </div>
              <div className="absolute -bottom-[2px] -left-[2px] flex h-20 items-center justify-center rounded-xl border-2 border-white bg-stone-950">
                <p className="max-w-[180px] p-3 text-sm text-white lg:max-w-[340px]">
                  AI A/B Cobolt code testing turned into a game!
                </p>
              </div>
              <div
                className="absolute -bottom-[2px] -right-[2px] flex h-20 items-center justify-center gap-x-2 rounded-xl border-2 border-white bg-stone-950 p-3"
                id="code/page"
              >
                <img src={Code} className="lg:-8 w-6" /> ~
                <img src={WebPage} className="w-4 lg:w-6" />{" "}
              </div>
              <div
                className="absolute -top-4 left-[60px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-stone-950 transition duration-300 ease-in-out hover:bg-stone-800"
                id="+"
              >
                <img src={Plus} className="w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
