import { ABOUTME } from 'data/about';
import SectionHeader from 'components/SectionHeader';
import Skills from './Skills';

export default function About() {
	return (
		<section id="about">
			<div className="container mx-auto text-center">
				<SectionHeader>About Me</SectionHeader>
				<div className="md:flex">
					<article className="md:w-1/2">
						<p className="whitespace-pre-line max-w-prose mx-auto">{ABOUTME.content}</p>
						<a className="cta" href={ABOUTME.emailRef}>
							Get in Touch
						</a>
					</article>
					<Skills />
				</div>
			</div>
		</section>
	);
}
