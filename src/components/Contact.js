import SectionHeader from 'components/SectionHeader';
import SectionContainer from 'hoc/SectionContainer';
import SocialMediaList from 'components/SocialMediaList';
import { CONTACT } from 'data/contact';

export default function Contact() {
	return (
		<SectionContainer id="contact">
			<SectionHeader>{CONTACT.title}</SectionHeader>
			<div className="flex flex-col items-center">
				<p>{CONTACT.content}</p>
				<SocialMediaList onFooter={true} />
			</div>
		</SectionContainer>
	);
}
