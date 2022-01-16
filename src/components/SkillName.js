import { useSkillContext } from 'hoc/SkillsContext';
import Typewriter from 'typewriter-effect';

export default function SkillName() {
	const { skill } = useSkillContext();

	return (
		<div className="mb-4 text-center">
			<Typewriter
				options={{
					strings: skill,
					autoStart: true,
					deleteAll: 1000
				}}
			/>
		</div>
	);
}
