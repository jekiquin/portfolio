import { createContext, useContext, useState } from 'react';

const SkillContext = createContext();

export const useSkillContext = () => {
	return useContext(SkillContext);
};

export default function SkillsContext({ children }) {
	const [skill, setSkill] = useState('');

	return <SkillContext.Provider value={{ skill, setSkill }}>{children}</SkillContext.Provider>;
}
