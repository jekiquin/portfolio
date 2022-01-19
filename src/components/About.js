import { ABOUTME } from 'data/about';
import SectionHeader from 'components/SectionHeader';
import Skills from './Skills';
import SkillsContext from 'hoc/SkillsContext';
import SectionContainer from 'hoc/SectionContainer';

export default function About() {
	return (
		<SectionContainer id="about">
			<SectionHeader>About Me</SectionHeader>

			<article className="mx-auto md:w-1/2">
				<p className="whitespace-pre-line mx-auto">{ABOUTME.content}</p>
				<a className="cta" href={ABOUTME.emailRef}>
					Get in Touch
				</a>
			</article>
			<SkillsContext>
				<Skills />
			</SkillsContext>
		</SectionContainer>
	);
}
