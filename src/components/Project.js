import PropTypes from 'prop-types';
import { PLACEHOLDER } from 'data/images';

export default function Project({ project, selectProject }) {
	const { name, image, stacks } = project;
	const displayImage = image || PLACEHOLDER.src;

	return (
		<div className="relative h-96 w-96 rounded-xl overflow-hidden cursor-pointer bg-sky-900">
			<img
				className="absolute top-0 left-0 h-full w-full object-cover opacity-40"
				src={displayImage}
				alt={name}
			/>
			<div className="Project__ctx">
				<h3 className="text-2xl">{name}</h3>
				<p>{stacks.join(', ')}</p>
			</div>
		</div>
	);
}

Project.propTypes = {
	project: PropTypes.object.isRequired,
	selectProject: PropTypes.func
};
