import { useEffect, useState, useRef } from 'react';
import uniqid from 'uniqid';
import { setMaxHexCol, setSkillsGroup } from 'utils/utils';
import HexRow from 'components/HexRow';
import SkillName from './SkillName';

export default function Skills() {
	const [hexGroup, setHexGroup] = useState([]);
	const [hexColSize, setHexColSize] = useState(0);
	const hexGrid = useRef();

	useEffect(() => {
		const currentContainer = hexGrid.current;
		// setMaxHexCol(currentContainer, hexColSize, setHexColSize)();
		// window.addEventListener(
		// 	'resize',
		// 	setMaxHexCol(currentContainer, hexColSize, setHexColSize)
		// );
		// return () => window.removeEventListener('resize', setMaxHexCol());
		setMaxHexCol(currentContainer, hexColSize, setHexColSize);
	}, []);

	useEffect(() => {
		setSkillsGroup(hexColSize, setHexGroup);
	}, [hexColSize]);

	const displayHexRow = hexGroup.map((row) => <HexRow key={uniqid()} imageObj={row} />);

	return (
		<div className="w-full min-w-skills mx-auto p-4 mt-2 md:mt-8 md:w-1/2 md:p-0">
			<div className="mx-auto ml-4 md:ml-8">
				<h3 className="md:text-2xl">Skills</h3>
				<SkillName />

				<div ref={hexGrid} className="flex flex-col width-11/12">
					{displayHexRow}
				</div>
			</div>
		</div>
	);
}
