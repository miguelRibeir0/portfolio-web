import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

const cdnEndpoint = import.meta.env.VITE_CDN_ENDPOINT;

const End = () => {
  return (
    <Fade>
      <div className="mt-20 flex flex-col items-center justify-center pl-12 pr-12">
        <div className="flex gap-x-3">
          <p>
            To see how I have been using my stack click{" "}
            <a href="/projects" className="underline">
              here
            </a>{" "}
            or in the projects tab at the top of the page.
          </p>
        </div>
        <div className="mt-16 flex items-start justify-center gap-x-10">
          <a href="https://github.com/miguelRibeir0" target="_blank">
            <img
              src={`${cdnEndpoint}/Portfolio/SVGS/Github.svg`}
              className="w-12 cursor-pointer lg:w-14"
            />
          </a>
          <a
            href={`${cdnEndpoint}/Portfolio/CV-Miguel-Ribeiro.pdf`}
            target="_blank"
          >
            <Tooltip id="CV" opacity={1} />
            <img
              src={`${cdnEndpoint}/Portfolio/SVGS/CV.svg`}
              className="w-12 cursor-pointer lg:w-14"
              data-tooltip-id="CV"
              data-tooltip-content="CV"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default End;
