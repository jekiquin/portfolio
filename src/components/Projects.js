import SectionContainer from 'hoc/SectionContainer';
import SectionHeader from './SectionHeader';
import { PROJECTS } from 'data/projects';

export default function Projects() {
	const { title, projects } = PROJECTS;
	return (
		<SectionContainer>
			<SectionHeader>{title}</SectionHeader>
		</SectionContainer>
	);
}
