import PropTypes from 'prop-types';

export default function NavItem({ navItem }) {
	return (
		<li className="hover:text-green">
			<a href={navItem.href}>{navItem.label}</a>
		</li>
	);
}

NavItem.propTypes = {
	navItem: PropTypes.object.isRequired
};
