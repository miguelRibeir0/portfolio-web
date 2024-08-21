import { Fade } from "react-awesome-reveal";

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
              src={
                "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Github.svg"
              }
              className="w-12 cursor-pointer lg:w-14"
            />
          </a>
          <a href="">
            <img
              src={
                "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/CV.svg"
              }
              className="w-12 cursor-pointer lg:w-14"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default End;
