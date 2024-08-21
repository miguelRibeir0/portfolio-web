import { Fade } from "react-awesome-reveal";

const ShortAbout = () => {
  return (
    <div className="flex h-72 w-full items-center justify-center pl-12 pr-12">
      <div className="w-full lg:w-1/2">
        <Fade>
          <p className="custom-justify text-justify leading-relaxed">
            Hi! I'm a full-stack developer from Portugal with a deep passion for
            web development and its endless possibilities. Over the years, I've
            honed my skills across a wide range of technologies, consistently
            seeking out opportunities to learn and innovate.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default ShortAbout;
