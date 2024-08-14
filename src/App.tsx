import Hero from './Components/Landing/Hero';
import Nav1 from './Components/Nav/Nav1';
import ShortAbout from './Components/Landing/AboutMe(short)';
import Stack from './Components/Landing/Stack';

function App() {
  return (
    <div className="bg-stone-950 text-white font-mono pb-20">
      <Nav1 />
      <Hero />
      <ShortAbout />
      <Stack />
    </div>
  );
}

export default App;
