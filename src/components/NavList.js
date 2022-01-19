import PropTypes from 'prop-types';
import { NAVLIST } from 'data/nav-list';
import uniqid from 'uniqid';
import NavItem from './NavItem';

export default function NavList({ isMobile, showNavList }) {
	const listDisplayStyle = isMobile ? 'flex flex-col md:hidden' : 'hidden md:flex md:h-fit';
	const showList = showNavList ? 'h-20vh' : 'h-0';

	return (
		<ul
			className={`${listDisplayStyle} ${showList} transition-custom-all items-center justify-evenly overflow-hidden`}>
			{NAVLIST.map((navItem) => (
				<NavItem key={uniqid()} navItem={navItem} />
			))}
		</ul>
	);
}

NavList.propTypes = {
	isMobile: PropTypes.bool.isRequired,
	showNavList: PropTypes.bool.isRequired
};
