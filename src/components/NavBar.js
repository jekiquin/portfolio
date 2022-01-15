import NavList from 'components/NavList';
import { LOGOS } from 'data/images';
import { useNavContext } from 'hoc/NavContext';

export default function NavBar() {
	const { showNavList, setShowNavList } = useNavContext();
	const { main } = LOGOS;

	const handleClick = () => {
		setShowNavList((prevState) => !prevState);
	};

	return (
		<nav className="bg-dark-gray text-white sticky top-0">
			<div className="container mx-auto py-4 px-6 flex justify-between items-center md:px-10">
				<a href="/">
					<img className="w-24 lg:w-40" src={main.src} alt={main.alt} />
				</a>
				<button className="md:hidden" onClick={handleClick}>
					<i className="fas fa-bars"></i>
				</button>
				<NavList isMobile={false} isShown={true} />
			</div>
			<NavList isMobile={true} showNavList={showNavList} />
		</nav>
	);
}
