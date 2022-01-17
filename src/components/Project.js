import PropTypes from 'prop-types';
import { PLACEHOLDER } from 'data/images';

export default function Project({ project, selectProject }) {
	const { name, image, stacks, description, deployedURL, githubURL } = project;
	const displayImage = image || PLACEHOLDER.src;

	return (
		<div className="Project h-96 w-96 rounded-xl overflow-hidden cursor-pointer bg-light-blue">
			<div className="h-fit relative">
				<img className="object-cover" src={displayImage} alt={name} />
				<div className="Project__modal hidden absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between items-center bg-trans-green text-white">
					<h3>{description}</h3>
					<div className="flex gap-4 justify-center items-center  text-4xl">
						{deployedURL && (
							<a
								className="hover:text-blue"
								href={deployedURL}
								rel="noreferrer"
								target="_blank">
								<i className="fas fa-link"></i>
							</a>
						)}
						{githubURL && (
							<a
								className="hover:text-blue"
								href={githubURL}
								rel="noreferrer"
								target="_blank">
								<i className="fab fa-github-square"></i>
							</a>
						)}
					</div>
				</div>
			</div>

			<div className="p-4 overflow-hidden text-ellipsis overflow-hidden">
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
