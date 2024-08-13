import Typewriter from '../TypeWriting';

const Hero = () => {
  return (
    <div className="h-screen w-scrren bg-stone-950 text-slate-50 flex items-center justify-center font-mono ">
      <div className="flex flex-col gap-y-3 w-3/4 items-center">
        <h1 className="lg:text-5xl text-3xl uppercase font-bold">
          <Typewriter text="Miguel Ribeiro" />
        </h1>
        <h2 className="lg:text-2xl text-lg">
          <Typewriter text="Full Stack Web Developer" />
        </h2>
      </div>
    </div>
  );
};

export default Hero;
