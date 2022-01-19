import uniqid from 'uniqid';
import SectionContainer from 'hoc/SectionContainer';
import SectionHeader from 'components/SectionHeader';
import Project from 'components/Project';
import { PROJECTS } from 'data/projects';

export default function Projects() {
	const { title, projects } = PROJECTS;

	const displayProjects = projects.map((project) => <Project key={uniqid()} project={project} />);
	return (
		<SectionContainer id="projects">
			<SectionHeader>{title}</SectionHeader>
			<div className="w-fit  mx-auto grid grid-cols-1 justify-items-center justify-center gap-8 lg:grid-cols-2 lg:gap-16">
				{displayProjects}
			</div>
		</SectionContainer>
	);
}
