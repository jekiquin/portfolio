import uniqid from 'uniqid';
import { SOCIALMEDIA } from 'data/social-media';
import { IMAGES } from 'data/images';

export default function Banner() {
	const { PROFILE } = IMAGES;
	const displayIcons = SOCIALMEDIA.map((media) => (
		<a
			className="flex w-8 h-8 ml-2 p-2  justify-center align-center border border-blue rounded-full"
			key={uniqid()}
			href={media.href}
			rel="noreferrer"
			target="_blank">
			<i className={media.icon}></i>
		</a>
	));

	return (
		<section className="container mx-auto h-screen flex flex-col items-center justify-center px-8 py-16 sm:flex-row sm:justify-between">
			<div className="mb-12">
				<div className="border-l-4 border-blue pl-2 md:pl-6 md:border-l-8">
					<p className="text-orange">Hey! My name is</p>
					<h1 className="text-blue md:text-8xl">Jerick Iquin</h1>
					<p>Fullstack Developer</p>
				</div>
				<div className="text-blue flex my-2 md:my-4 md:pl-6">{displayIcons}</div>
				<a
					className="inline-block text-green py-2 px-4 border border-green rounded-full md:ml-8"
					href="#about">
					About Me
				</a>
			</div>
			<div className="p-1 h-52 drop-shadow-xl rounded-lg border overflow-hidden md:h-80">
				<img className="h-full rounded-lg" src={PROFILE.src} alt={PROFILE.alt} />
			</div>
		</section>
	);
}
