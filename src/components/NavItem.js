import { useNavContext } from 'hoc/NavContext';
import PropTypes from 'prop-types';

export default function NavItem({ navItem, isMobile }) {
	const { setShowNavList } = useNavContext();
	const listBorderStyle = !isMobile ? 'border-l-2 border-l-green' : '';
	return (
		<li className={`${listBorderStyle} w-24 px-2 hover:text-green`}>
			<a
				className="block text-center"
				href={navItem.href}
				onClick={() => setShowNavList(false)}>
				{navItem.label}
			</a>
		</li>
	);
}

NavItem.propTypes = {
	navItem: PropTypes.object.isRequired,
	isMobile: PropTypes.bool.isRequired
};
