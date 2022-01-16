import { ABOUTME } from 'data/about';
import SectionHeader from 'components/SectionHeader';

export default function About() {
	return (
		<section id="about">
			<div className="container mx-auto text-center">
				<SectionHeader>About Me</SectionHeader>
				<p class="whitespace-pre-line">{ABOUTME.content}</p>
				<a className="cta" href={ABOUTME.emailRef}>
					Get in Touch
				</a>
			</div>
		</section>
	);
}
