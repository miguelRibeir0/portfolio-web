import Typewriter from '../TypeWriting';

const Nav1 = () => {
  return (
    <nav className="w-full fixed top-0 z-10 text-slate-50 font-mono bg-stone-950">
      <ul className="flex py-7 items-center justify-evenly gap-x-4">
        <li>
          <a href="">
            <Typewriter
              text="About Me"
              className="border-b-2 border-transparent transition ease-in-out duration-500 pb-1 hover:border-white"
            />
          </a>
        </li>
        <li>
          <a href="">
            <Typewriter
              text="Projects"
              className="border-b-2 border-transparent transition ease-in-out duration-500 pb-1 hover:border-white"
            />
          </a>
        </li>
        <li>
          <a href="">
            <Typewriter
              text="Contact Me"
              className="border-b-2 border-transparent transition ease-in-out duration-500 pb-1 hover:border-white"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav1;
