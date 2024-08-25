import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./Components/Landing/Landing";
import AboutMe from "./Components/About-me/AboutMe";
import ContactMe from "./Components/Contact-me/ContactMe";
import Projects from "./Components/Projects/Projects";
import ScrollToTop from "./Components/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Landing />
      </>
    ),
  },
  {
    path: "/about-me",
    element: (
      <>
        <ScrollToTop />
        <AboutMe />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <ScrollToTop />
        <Projects />
      </>
    ),
  },
  {
    path: "/contact-me",
    element: (
      <>
        <ScrollToTop />
        <ContactMe />
      </>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
