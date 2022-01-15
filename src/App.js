import Banner from 'components/Banner';
import NavContext from 'hoc/NavContext';
import NavBar from 'components/NavBar';

function App() {
	return (
		<main className="App sm:text-base">
			<Banner />

			<div className="test">
				<NavContext>
					<NavBar />
				</NavContext>
			</div>
		</main>
	);
}

export default App;
