import NavList from 'components/NavList';
import { LOGO } from 'data/images';
import { useNavContext } from 'hoc/NavContext';

export default function NavBar() {
	const { showNavList, setShowNavList } = useNavContext();

	const handleClick = () => {
		setShowNavList((prevState) => !prevState);
	};

	return (
		<nav className="bg-dark-gray text-white sticky top-0 z-20">
			<div className="container mx-auto h-20 py-4 px-6 flex justify-between items-center md:px-10">
				<a href="/">
					<img className="w-24" src={LOGO.src} alt={LOGO.alt} />
				</a>
				<button className="md:hidden" onClick={handleClick}>
					<i className="fas fa-bars"></i>
				</button>
				<NavList isMobile={false} showNavList={true} />
			</div>
			<div className="absolute z-5 w-full bg-dark-gray">
				<NavList isMobile={true} showNavList={showNavList} />
			</div>
		</nav>
	);
}
