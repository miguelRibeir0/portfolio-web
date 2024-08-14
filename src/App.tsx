import Hero from './Components/Landing/Hero';
import Nav1 from './Components/Nav/Nav1';
import ShortAbout from './Components/Landing/AboutMe(short)';
import Stack from './Components/Landing/Stack';
import End from './Components/Landing/End';

function App() {
  return (
    <div className="bg-stone-950 text-white font-mono pb-10">
      <Nav1 />
      <Hero />
      <ShortAbout />
      <Stack />
      <End />
    </div>
  );
}

export default App;
