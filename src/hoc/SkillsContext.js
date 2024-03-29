import { createContext, useContext, useState } from 'react';

export const SKILLPLACEHOLDER = 'Hover over my skills!';

const SkillContext = createContext();

export const useSkillContext = () => {
	return useContext(SkillContext);
};

export default function SkillsContext({ children }) {
	const [skill, setSkill] = useState(SKILLPLACEHOLDER);

	return <SkillContext.Provider value={{ skill, setSkill }}>{children}</SkillContext.Provider>;
}
