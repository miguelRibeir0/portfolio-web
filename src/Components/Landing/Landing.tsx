import Hero from './Hero';
import Nav from '../Nav/Nav';
import ShortAbout from './AboutMe(short)';
import Stack from './Stack';
import End from './End';

const Landing = () => {
  return (
    <div className="bg-stone-950 text-white font-mono pb-10 ">
      <Nav variation={0} />
      <Hero />
      <ShortAbout />
      <Stack />
      <End />
    </div>
  );
};

export default Landing;
