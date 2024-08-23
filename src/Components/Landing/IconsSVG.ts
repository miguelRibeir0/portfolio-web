type icons = {
  name: string;
  path: string;
}[];

const cdnEndpoint = import.meta.env.VITE_CDN_ENDPOINT;

const icons: icons = [
  {
    name: `React`,
    path: `${cdnEndpoint}/Portfolio/SVGS/React.svg`,
  },
  {
    name: `MongoDb`,
    path: `${cdnEndpoint}/Portfolio/SVGS/MongoDB.svg`,
  },
  {
    name: `Angular`,
    path: `${cdnEndpoint}/Portfolio/SVGS/Angular.svg`,
  },
  {
    name: `ExpressJS`,
    path: `${cdnEndpoint}/Portfolio/SVGS/ExpressJS.svg`,
  },
  {
    name: `NodeJS`,
    path: `${cdnEndpoint}/Portfolio/SVGS/NodeJS.svg`,
  },
  {
    name: `TailwindCSS`,
    path: `${cdnEndpoint}/Portfolio/SVGS/TailwindCSS.svg`,
  },
  {
    name: `PostgresSQL`,
    path: `${cdnEndpoint}/Portfolio/SVGS/PostgresSQL.svg`,
  },
  {
    name: `TypeScript`,
    path: `${cdnEndpoint}/Portfolio/SVGS/TypeScript.svg`,
  },
];

export default icons;
