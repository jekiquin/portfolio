import PropTypes from 'prop-types';

export default function Hex({ image, label }) {
	return (
		<li className="Hex">
			<img className="Hex__img" src={image} alt={label} title={label} />
		</li>
	);
}

Hex.propTypes = {
	image: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

Hex.defaultProps = {
	image: '',
	label: 'Placeholder'
};
