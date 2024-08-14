import Typewriter from '../TypeWriting';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div className="h-screen w-scrren text-slate-50 flex items-center justify-center font-mono ">
      <div className="flex flex-col gap-y-3 w-3/4 items-center">
        <span className="lg:text-5xl text-3xl uppercase font-bold">
          <Typewriter text="Miguel Ribeiro" />
        </span>
        <span className="lg:text-2xl text-lg">
          <Typewriter text="Full Stack Web Developer" />
        </span>
      </div>
      <Fade>
        <div className="w-12 h-12 rounded-full absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
          <span className="text-4xl font-black rotate-90 text-white animate-pulse">
            &gt;
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
