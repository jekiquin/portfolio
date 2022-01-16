import { IMAGES } from 'data/images';
import { NAVLIST } from 'data/nav-list';
import SocialMediaList from './SocialMediaList';

export default function Banner() {
	const { PROFILE } = IMAGES;

	return (
		<section className="container mx-auto h-screen flex flex-col items-center justify-center px-8 py-16 sm:flex-row sm:justify-between">
			<div className="mb-12">
				<div className="border-l-4 border-blue pl-2 md:pl-6 md:border-l-8">
					<p className="text-orange">Hey! My name is</p>
					<h1 className="text-blue md:text-8xl">Jerick Iquin</h1>
					<p>Fullstack Developer</p>
				</div>
				<SocialMediaList onFooter={false} />
				<a className="cta" href={NAVLIST.find((nav) => nav.label === 'about').href}>
					About Me
				</a>
			</div>
			<div className="p-1 h-52 drop-shadow-xl rounded-lg border overflow-hidden md:h-80">
				<img className="h-full rounded-lg" src={PROFILE.src} alt={PROFILE.alt} />
			</div>
		</section>
	);
}
