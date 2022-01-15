import PropTypes from 'prop-types';
import { NAVLIST } from 'data/nav-list';
import uniqid from 'uniqid';
import NavItem from './NavItem';

export default function NavList({ isMobile, isShown }) {
	const listDisplayStyle = isMobile ? 'flex flex-col lg:hidden' : 'hidden lg:flex';
	const showList = isShown ? 'NavList--show' : 'NavList';

	return (
		<ul
			className={`${listDisplayStyle} ${showList} items-center justify-evenly overflow-hidden`}>
			{NAVLIST.map((navItem) => (
				<NavItem key={uniqid()} navItem={navItem} />
			))}
		</ul>
	);
}

NavList.propTypes = {
	isMobile: PropTypes.bool.isRequired,
	isShown: PropTypes.bool.isRequired
};
