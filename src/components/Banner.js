import { PROFILE } from 'data/images';
import { NAVLIST } from 'data/nav-list';
import SocialMediaList from './SocialMediaList';

export default function Banner() {
	return (
		<section className="bg-hero bg-cover bg-fixed bg-center relative">
			<div className="absolute w-full h-full top-0 left-0 right-0 bg-stone-900 opacity-80"></div>
			<div className="container w-full mx-auto h-screen flex flex-col items-center justify-center px-8 py-16 overflow-hidden sm:flex-row sm:justify-evenly">
				<div className="mb-12 opacity-0 animate-heroSlide">
					<div className="relative border-l-4 border-blue text-yellow-200 pl-2 md:pl-6 md:border-l-8">
						<p>Hey! My name is</p>
						<h1 className="text-blue md:text-8xl">Jerick Iquin</h1>
						<p>Fullstack Developer</p>
					</div>
					<SocialMediaList onFooter={false} />
					<a
						className="cta animate-pulse"
						href={NAVLIST.find((nav) => nav.label === 'about').href}>
						About Me
					</a>
				</div>
				<div className="p-1 h-52 drop-shadow-xl rounded-lg border overflow-hidden opacity-0 animate-heroSlide-reverse md:h-80 lg:h-96">
					<img className="h-full rounded-lg" src={PROFILE.src} alt={PROFILE.alt} />
				</div>
			</div>
		</section>
	);
}
