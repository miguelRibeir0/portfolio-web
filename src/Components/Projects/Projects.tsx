import Nav from "../Nav/Nav";
import { Fade } from "react-awesome-reveal";
import ProjectItem from "./ProjectItem";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/fetch-requests/dbfetch";
import ProjectLoading from "./Projects(loading)";

const Projects = () => {
	const { data: projects, isLoading } = useQuery({
		queryKey: ["projects"],
		queryFn: getProjects,
	});

	interface Project {
		MainLanguage: string;
		BackgroundImage: string;
		Description: string;
		CodeLink: string;
		WebsiteLink: string;
		SecondaryLanguages: string[];
	}

	if (isLoading) {
		return <ProjectLoading />;
	}

	function shuffleArray<T>(array: T[]): T[] {
		const shuffledArray = [...array];

		// Iterate over the array from the last element to the second element
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			// Swap the elements at indices i and j
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}

		return shuffledArray;
	}

	return (
		<Fade>
			<div>
				<Nav variation={2} />
				<div className="h-32 w-full lg:h-24" /> {/* nav filler */}
				<div className="m-2 flex flex-wrap items-center justify-center gap-x-20 gap-y-20 lg:m-20">
					{(() => {
						if (projects?.length > 0) {
							const shuffledProjects = shuffleArray(projects) as Project[];
							return shuffledProjects.map((project: Project, index: number) => {
								// Flatten the nested array
								const flattenedLanguages = project.SecondaryLanguages.flat();

								return (
									<ProjectItem
										key={index}
										index={index}
										mainLanguage={project.MainLanguage}
										image={project.BackgroundImage}
										description={project.Description}
										code={project.CodeLink}
										website={project.WebsiteLink}
										languages={
											flattenedLanguages as [
												string,
												string?,
												string?,
												string?,
												string?,
											]
										}
									/>
								);
							});
						}
						return <p>No projects available</p>;
					})()}
				</div>
			</div>
		</Fade>
	);
};

export default Projects;
