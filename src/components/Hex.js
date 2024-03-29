import PropTypes from 'prop-types';

import { SKILLPLACEHOLDER, useSkillContext } from 'hoc/SkillsContext';

export default function Hex({ image, label }) {
	const { setSkill } = useSkillContext();

	const handleMouseEnter = () => {
		setSkill(label);
	};

	const handleMouseLeave = () => {
		setSkill(SKILLPLACEHOLDER);
	};

	return (
		<li
			className="Hex flex justify-center items-center shrink-0 bg-white opacity-40 transition-custom-all scale-0 w-20 h-20 hover:opacity-100"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleMouseEnter}>
			<img
				className="w-1/2 object-fill transition-custom-all hover:scale-110"
				src={image}
				alt={label}
				title={label}
			/>
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
