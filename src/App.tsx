import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import AboutMe from './Components/About-me/AboutMe';
import ContactMe from './Components/Contact-me/ContactMe';
import Projects from './Components/Projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact-me',
    element: <ContactMe />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
