const server = import.meta.env.VITE_SERVER;

interface newProjectProps {
  MainLanguage: string;
  SecondaryLanguages: string;
  BackgroundImage: string;
  Description: string;
  CodeLink: string;
  WebsiteLink: string;
}

const newProject = async ({
  MainLanguage,
  SecondaryLanguages,
  BackgroundImage,
  Description,
  CodeLink,
  WebsiteLink,
}: newProjectProps) => {
  const ans = await fetch(`${server}/portfolio/projects/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      MainLanguage,
      SecondaryLanguages,
      BackgroundImage,
      Description,
      CodeLink,
      WebsiteLink,
    }),
  });
  const data = await ans.json();

  return data;
};

const getProjects = async () => {
  const ans = await fetch(`${server}/portfolio/projects`);
  const data = await ans.json();

  return data;
};

export { newProject, getProjects };
