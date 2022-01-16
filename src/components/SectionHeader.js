export default function SectionHeader({ children }) {
	return (
		<>
			<h2 className="md:text-3xl">{children}</h2>
			<div className="ji-divider"></div>
		</>
	);
}
