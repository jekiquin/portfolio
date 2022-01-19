import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import Hex from 'components/Hex';

export default function HexRow({ imageObj }) {
	const displayHex = imageObj.map((hex) => (
		<Hex key={uniqid()} image={hex.logo} label={hex.name} />
	));

	return (
		<ul className="flex gap-hex-gap mt-hex-top first:mt-hex-first last:mb-hex-bottom even:ml-hex-left">
			{displayHex}
		</ul>
	);
}

HexRow.propTypes = {
	imageObj: PropTypes.array.isRequired
};
