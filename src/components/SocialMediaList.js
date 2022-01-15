import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { SOCIALMEDIA } from 'data/social-media';

export default function SocialMediaList({ onFooter }) {
	const borderStyle = onFooter
		? 'bg-blue text-white hover:bg-white hover:text-blue'
		: 'rounded-full hover:bg-blue hover:text-white';
	return (
		<div className="text-blue flex my-2 md:my-4 md:pl-6">
			{SOCIALMEDIA.map((media) => (
				<a
					className={`flex w-8 h-8 ml-2 p-2  justify-center align-center border border-blue ${borderStyle}`}
					key={uniqid()}
					href={media.href}
					rel="noreferrer"
					target="_blank">
					<i className={media.icon}></i>
				</a>
			))}
		</div>
	);
}

SocialMediaList.propTypes = {
	onFooter: PropTypes.bool.isRequired
};
