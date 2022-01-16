export default function SectionHeader({ children }) {
	return (
		<div className="mb-8">
			<h2 className="md:text-3xl mb-4">{children}</h2>
			<div className="ji-divider"></div>
		</div>
	);
}
