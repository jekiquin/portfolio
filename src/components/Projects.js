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
			<div className="flex justify-center items-center flex-wrap gap-4">
				{displayProjects}
			</div>
		</SectionContainer>
	);
}