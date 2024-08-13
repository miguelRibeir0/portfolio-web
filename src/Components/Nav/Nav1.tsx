import Typewriter from '../TypeWriting';

const Nav1 = () => {
  return (
    <nav className="w-full fixed top-0 z-10 text-slate-50 font-mono ">
      <ul className="flex py-7 items-center justify-evenly gap-x-4">
        <li>
          <Typewriter text="About Me" />
        </li>
        <li>
          <Typewriter text="Projects" />
        </li>
        <li>
          <Typewriter text="Contact Me" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav1;
