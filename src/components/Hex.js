import PropTypes from 'prop-types';

export default function Hex({ image, label }) {
	return (
		<li className="Hex">
			<a className="Hex__dummy-link" href="/" onClick={(e) => e.preventDefault()}>
				<img className="Hex__img" src={image} alt={label} title={label} />
			</a>
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
