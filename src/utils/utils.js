import { SKILLS, HEXWIDTH } from 'data/skills-list';

export function setMaxHexCol(container, hexColSize, setHexColSize) {
	const resizeObserver = new ResizeObserver((entries) => {
		let width;
		for (let entry of entries) {
			if (entry.contentBoxSize[0]) {
				width = entry.contentBoxSize[0].inlineSize;
			} else if (entry.contentBoxSize) {
				width = entry.contentBoxSize.inlineSize;
			} else {
				width = entry.contentRect.width;
			}
			const maxColSize = Math.floor(width / HEXWIDTH);
			if (hexColSize !== maxColSize) {
				setHexColSize(maxColSize);
			}
		}
	});
	resizeObserver.observe(container);
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

const options = {
	root: null,
	rootMargin: '0px'
};

function sectionObserverCallback(entries, observer) {
	entries.forEach((entry, idx) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-slideIn');
		}
	});
}

function hexObserverCallback(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			Array.prototype.forEach.call(entry.target.children, (child, idx) =>
				child.classList.add('animate-popout', `animation-delay-${idx}`)
			);
		}
	});
}

function projectObserverCallback(entries, observer) {
	entries.forEach((entry, idx) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-popout');
		}
	});
}

export const sectionObserver = new IntersectionObserver(sectionObserverCallback, {
	...options,
	threshold: 0.1
});

export const hexObserver = new IntersectionObserver(hexObserverCallback, {
	...options,
	threshold: 0.05
});

export const projectObserver = new IntersectionObserver(projectObserverCallback, {
	...options,
	threshold: 1
});
