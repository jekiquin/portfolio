import PropTypes from 'prop-types';
import { PLACEHOLDER } from 'data/images';
import { useState, useEffect, useRef } from 'react';
import { projectObserver } from 'utils/utils';

export default function Project({ project }) {
	const [modalView, setModalView] = useState('modal');
	const projectRef = useRef();
	const { name, image, stacks, description, deployedURL, githubURL } = project;
	const displayImage = image || PLACEHOLDER.src;

	useEffect(() => {
		projectObserver.observe(projectRef.current);
	}, []);

	const handleMouseEnter = () => {
		setModalView('modal--view');
	};

	const handleMouseLeave = () => {
		setModalView('modal--hide');
	};

	return (
		<div
			ref={projectRef}
			className="scale-0 w-80 h-80 rounded-xl overflow-hidden bg-light-blue sm:w-96 sm:h-96"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className="h-fit relative">
				<img className="object-cover" src={displayImage} alt={name} />
				<div
					className={`${modalView} scale-x-0 absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between items-center bg-trans-green text-white`}>
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
				<button onClick={handleMouseEnter}>
					<h3 className="text-2xl underline">{name}</h3>
				</button>
				<p>{stacks.join(', ')}</p>
			</div>
		</div>
	);
}

Project.propTypes = {
	project: PropTypes.object.isRequired
};
