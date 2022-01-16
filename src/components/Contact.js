import SectionHeader from 'components/SectionHeader';
import SectionContainer from 'hoc/SectionContainer';
import SocialMediaList from 'components/SocialMediaList';

export default function Contact() {
	return (
		<SectionContainer id="contact">
			<SectionHeader>Contact Me</SectionHeader>
			<div className="flex flex-col items-center">
				<p>
					If you want to get to know me better, my inboxes are open. Whether you have
					question or just want to drop by to say hi.
				</p>
				<SocialMediaList onFooter={true} />
			</div>
		</SectionContainer>
	);
}
