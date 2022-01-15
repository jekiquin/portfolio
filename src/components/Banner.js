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
		<section className="h-screen">
			<div>
				<p>Hey! My name is</p>
				<h1>Jerick Iquin</h1>
				<p>Fullstack Developer</p>
				<div>{displayIcons}</div>
				<a href="#about">About Me</a>
			</div>
			<div>
				<img src={PROFILE.src} alt={PROFILE.alt} />
			</div>
		</section>
	);
}
