import PropTypes from 'prop-types';

export default function NavItem({ navItem }) {
	return (
		<li className="border-l-2 border-l-green w-24 px-2 hover:text-green">
			<a className="block text-center" href={navItem.href}>
				{navItem.label}
			</a>
		</li>
	);
}

NavItem.propTypes = {
	navItem: PropTypes.object.isRequired
};
