import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Hex from 'components/Hex';
import { hexObserver } from 'utils/utils';

export default function HexRow({ imageObj }) {
	const hexRef = useRef();

	useEffect(() => {
		hexObserver.observe(hexRef.current);
	}, []);

	const displayHex = imageObj.map((hex) => (
		<Hex key={uniqid()} image={hex.logo} label={hex.name} />
	));

	return (
		<ul
			ref={hexRef}
			className="flex gap-hex-gap mt-hex-top first:mt-hex-first last:mb-hex-bottom even:ml-hex-left">
			{displayHex}
		</ul>
	);
}

HexRow.propTypes = {
	imageObj: PropTypes.array.isRequired
};
