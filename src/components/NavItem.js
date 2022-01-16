import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export default function NavItem({ navItem }) {
	return (
		<li className="border-l-2 border-l-green w-24 px-2 hover:text-green">
			<Link className="block text-center" to={navItem.href}>
				{navItem.label}
			</Link>
		</li>
	);
}

NavItem.propTypes = {
	navItem: PropTypes.object.isRequired
};
