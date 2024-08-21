import { Link } from "react-router-dom";
import { useState } from "react";

const cdnEndpoint = import.meta.env.VITE_CDN_ENDPOINT;

type MaxFiveLanguages = [string, string?, string?, string?, string?];

interface ProjectItemProps {
  index: number;
  mainLanguage: string;
  image: string;
  description: string;
  code: string;
  website: string;
  languages?: MaxFiveLanguages;
}

const ProjectItem = ({
  index,
  mainLanguage,
  image,
  description,
  code,
  website,
  languages,
}: ProjectItemProps) => {
  const [active, setActive] = useState(false);

  const showLanguages = () => {
    setActive(true);
  };
  return (
    <div
      className="relative h-96 min-w-[320px] rounded-xl border-2 border-white lg:min-w-[500px]"
      key={index}
    >
      <div
        className="absolute -left-[2px] -top-10 z-10 flex h-20 w-fit min-w-20 items-center justify-center gap-x-2 rounded-xl border-2 border-white bg-stone-950 pl-2 pr-2"
        id="languages"
      >
        <img src={mainLanguage} className="h-1/2" />
        {active
          ? languages?.map((language, index) => (
              <img src={language} className="h-1/2 select-none" key={index} />
            ))
          : ""}
      </div>
      <div className="absolute -bottom-[2px] -left-[2px] z-10 flex min-h-20 items-center justify-center rounded-xl border-2 border-white bg-stone-950">
        <p className="max-w-[180px] p-3 text-sm text-white lg:max-w-[340px]">
          {description}
        </p>
      </div>
      <div
        className="absolute -bottom-[2px] -right-[2px] z-10 flex h-20 items-center justify-center gap-x-4 rounded-xl border-2 border-white bg-stone-950 p-3"
        id="code/page"
      >
        <Link to={code} target="_blank">
          <img
            src={`${cdnEndpoint}/Portfolio/SVGS/Code.svg`}
            className="w-6 cursor-pointer lg:w-8"
          />
        </Link>
        <Link to={website} target="_blank">
          <img
            src={`${cdnEndpoint}/Portfolio/SVGS/WebPage.svg`}
            className="w-5 cursor-pointer lg:w-6"
          />{" "}
        </Link>
      </div>
      {active || languages?.[0] === "" ? (
        ""
      ) : (
        <div
          className="absolute -top-4 left-[60px] z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-stone-950 transition duration-300 ease-in-out hover:bg-stone-800"
          id="+"
          onClick={showLanguages}
        >
          <img
            src={
              "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Plus.svg"
            }
            className="w-1/3"
          />
        </div>
      )}
      <img
        src={image}
        alt=""
        className="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-opacity duration-300 ease-in-out hover:opacity-95 lg:opacity-80"
      />
    </div>
  );
};

export default ProjectItem;
