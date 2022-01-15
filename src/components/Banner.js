import uniqid from 'uniqid';
import { SOCIALMEDIA } from 'data/social-media';
import { IMAGES } from 'data/images';

export default function Banner() {
	const { PROFILE } = IMAGES;
	const displayIcons = SOCIALMEDIA.map((media) => (
		<a key={uniqid()} href={media.href} rel="noreferrer" target="_blank">
			<i className={media.icon}></i>
		</a>
	));

	return (
		<section className="container mx-auto h-screen flex flex-col items-center justify-center px-8 py-16 md:flex-row md:justify-between">
			<div className="mb-12">
				<p className="text-orange">Hey! My name is</p>
				<h1 className="md:text-8xl">Jerick Iquin</h1>
				<p>Fullstack Developer</p>
				<div>{displayIcons}</div>
				<a href="#about">About Me</a>
			</div>
			<div className="p-2 h-52 md:h-80">
				<img className="h-full" src={PROFILE.src} alt={PROFILE.alt} />
			</div>
		</section>
	);
}
