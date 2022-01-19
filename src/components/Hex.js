import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { SKILLPLACEHOLDER, useSkillContext } from 'hoc/SkillsContext';
import { hexObserver } from 'utils/utils';

export default function Hex({ image, label }) {
	const { setSkill } = useSkillContext();
	const hexRef = useRef();

	useEffect(() => {
		hexObserver.observe(hexRef.current);
	}, []);

	const handleMouseEnter = () => {
		setSkill(label);
	};

	const handleMouseLeave = () => {
		setSkill(SKILLPLACEHOLDER);
	};

	return (
		<li
			ref={hexRef}
			className="Hex scale-0"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleMouseEnter}>
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
