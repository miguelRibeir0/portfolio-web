import GitHub from "../../assets/Github.svg";
import CV from "../../assets/CV.svg";
import { Fade } from "react-awesome-reveal";
import Typewriter from "../TypeWriting";
import { useInView } from "react-intersection-observer";

const End = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <Fade>
      <div className="mt-20 flex flex-col items-center justify-center pl-12 pr-12">
        <div className="flex gap-x-3" ref={ref}>
          {inView && (
            <Typewriter
              text="To see how I have been using my stack click in the projects tab at the top of the page."
              speed={20}
            />
          )}
        </div>
        <div className="mt-16 flex items-start justify-center gap-x-10">
          <a href="https://github.com/miguelRibeir0" target="_blank">
            <img src={GitHub} className="w-12 cursor-pointer lg:w-14" />
          </a>
          <a href="">
            <img src={CV} className="w-12 cursor-pointer lg:w-14" />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default End;
