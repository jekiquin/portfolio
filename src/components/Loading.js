import { LOADING } from 'data/loading';
import uniqid from 'uniqid';

export default function Loading() {
	const displayLetters = LOADING.split('').map((letter, idx) => {
		const delay = `animation-delay-${idx}`;
		return (
			<div key={uniqid()} className="text-center">
				<span
					key={uniqid()}
					className={`inline-block text-3xl font-semibold text-red-600 mb-1 animate-letter-up ${delay} sm:text-5xl sm:mb-2`}>
					{letter}
				</span>
				<div
					className={`h-1 w-6 bg-red-600 animate-platform-up origin-bottom ${delay} sm:w-8`}></div>
			</div>
		);
	});
	return (
		<div className="fixed top-0 left-0 h-screen w-screen z-50 bg-black flex justify-center items-center animate-loading-fade gap-2 sm:gap-4">
			{displayLetters}
		</div>
	);
}
