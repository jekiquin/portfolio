import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import Hex from 'components/Hex';

export default function HexRow({ imageObj }) {
	const displayHex = imageObj.map((hex) => (
		<Hex key={uniqid()} image={hex.logo} label={hex.name} />
	));

	return <ul className="HexRow">{displayHex}</ul>;
}

HexRow.propTypes = {
	imageObj: PropTypes.array.isRequired
};
