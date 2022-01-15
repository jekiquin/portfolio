import { createContext, useContext, useState } from 'react';

const ShowList = createContext();

export function useNavContext() {
	return useContext(ShowList);
}

export default function NavContext({ children }) {
	const [showNavList, setShowNavList] = useState(false);

	return (
		<ShowList.Provider value={{ showNavList, setShowNavList }}>{children}</ShowList.Provider>
	);
}
