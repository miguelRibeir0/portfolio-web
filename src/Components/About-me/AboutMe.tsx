import Nav from "../Nav/Nav";
import { Fade } from "react-awesome-reveal";
import Typewriter from "../TypeWriting";

const AboutMe = () => {
  return (
    <Fade>
      <div>
        <Nav variation={1} />
        <div className="h-32 w-full lg:h-24"></div> {/* nav filler */}
        <div className="flex items-center justify-center text-white">
          <div className="m-2 flex flex-col items-center justify-center gap-y-10 lg:m-20 lg:mt-10">
            <Typewriter
              text="Who am I?"
              className="font-mono text-3xl font-bold"
              speed={100}
            />
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className="w-3/4">
                <p className="custom-justify text-justify text-lg leading-relaxed">
                  I'm a former graphic designer who found a new passion in
                  full-stack web development, and I've been hooked ever since. I
                  love taking on new challenges and diving into projects, and I
                  recently completed an advanced master's in Full Stack Web
                  Development and Digital Marketing.
                </p>
                <p className="custom-justify mt-5 text-justify text-lg leading-relaxed">
                  I've worked with a variety of technologies, including
                  TypeScript, React, Angular, Node.js, and Express, and I'm
                  always looking to learn something new that I can add to my
                  stack.
                </p>
                <p className="custom-justify mt-5 text-justify text-lg leading-relaxed">
                  Right now, I'm on the lookout for internships and job
                  opportunities in web development. I enjoy building things that
                  are both functional and visually appealing, and I'm eager to
                  keep growing in this field.
                </p>
                <p className="custom-justify mt-5 text-justify text-lg leading-relaxed">
                  Balancing design and development has given me a unique
                  perspective on problem-solving. Even tho I have been falling
                  more into the back end part of web development I still find
                  myself constantly leveragin my previous skills. Whether it's
                  debugging code or refining a user interface, I approach each
                  task with creativity and attention to detail. I'm excited to
                  find opportunities where I can continue blending these skills
                  and contribute to meaningful projects.
                </p>
              </div>
              <img
                src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/profile.jpg"
                className="mb-10 mt-10 w-3/4 max-w-[850px] lg:mb-0 lg:mt-20"
              />
            </div>
          </div>
        </div>
        <div className="mb-10 flex items-start justify-center gap-x-8">
          <a href="https://github.com/miguelRibeir0" target="_blank">
            <img
              src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Github.svg"
              className="w-12 cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/miguelribeir0/" target="_blank">
            <img
              src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/LinkedIn.svg"
              className="w-12 cursor-pointer"
            />
          </a>
          <a href="" target="_blank">
            <img
              src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/CV.svg"
              className="w-12 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default AboutMe;
