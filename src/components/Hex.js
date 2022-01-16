import PropTypes from 'prop-types';
import { useSkillContext } from 'hoc/SkillsContext';

export default function Hex({ image, label }) {
	const { setSkill } = useSkillContext();
	const handleMouseEnter = () => {
		setSkill(label);
	};

	const handleMouseLeave = () => {
		setSkill('');
	};

	return (
		<li className="Hex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
