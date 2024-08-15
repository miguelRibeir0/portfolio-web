import Typewriter from '../TypeWriting';
import { Link } from 'react-router-dom';

interface Number {
  variation: number;
}

const Nav = ({ variation }: Number) => {
  return (
    <nav className="w-full fixed top-0 z-10 text-slate-50 font-mono bg-stone-950">
      <ul className="flex py-7 items-center justify-evenly gap-x-4">
        <li>
          <Link to={`${variation == 0 ? '/about-me' : '/'}`}>
            <Typewriter
              text={`${variation == 0 ? 'About me' : 'Home'}`}
              className="border-b-2 border-transparent transition ease-in-out duration-500 pb-1 hover:border-white"
            />
          </Link>
        </li>
        <li>
          <Link to={`${variation == 2 ? '/about-me' : '/projects'}`}>
            <Typewriter
              text={`${variation == 2 ? 'About Me' : 'Projects'}`}
              className="border-b-2 border-transparent transition ease-in-out duration-500 pb-1 hover:border-white"
            />
          </Link>
        </li>
        <li>
          <Link to={`${variation == 3 ? '/about-me' : '/contact-me'}`}>
            <Typewriter
              text={`${variation == 3 ? 'About-me' : 'Contact Me'}`}
              className="border-b-2 border-transparent transition ease-in-out duration-500 pb-1 hover:border-white"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
