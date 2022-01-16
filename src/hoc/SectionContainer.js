import PropTypes from 'prop-types';

export default function SectionContainer({ className, id, children }) {
	return (
		<section className={className} id={id}>
			<div className="container mx-auto text-center">{children}</div>
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
