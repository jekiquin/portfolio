import { SKILLS, HEXWIDTH } from 'data/skills-list';

export function setMaxHexCol(container, hexColSize, setHexColSize) {
	return function () {
		const { offsetWidth: width } = container;
		const maxColSize = Math.floor(width / HEXWIDTH);
		if (hexColSize !== maxColSize) {
			setHexColSize(maxColSize);
		}
	};
}

export function setSkillsGroup(maxColSize, setHexGroup) {
	const outputGroup = [];
	let rowIdx = 0;
	SKILLS.forEach((skill, idx) => {
		if (!idx) {
			outputGroup.push([]);
		}
		let maxCol = rowIdx % 2 ? maxColSize - 1 : maxColSize;
		outputGroup[rowIdx].push(skill);
		if (maxCol === outputGroup[rowIdx].length) {
			rowIdx++;
			outputGroup.push([]);
		}
	});
	setHexGroup(outputGroup);
}
