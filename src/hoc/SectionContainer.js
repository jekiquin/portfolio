import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { observer } from 'utils/utils';

export default function SectionContainer({ className, id, children }) {
	const sectionRef = useRef();

	useEffect(() => {
		observer.observe(sectionRef.current);
	}, []);

	return (
		<section className={className} id={id}>
			<div ref={sectionRef} className="opacity-0 container mx-auto text-center">
				{children}
			</div>
		</section>
	);
}

SectionContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string
};

SectionContainer.defaultProps = {
	className: null,
	id: null
};
