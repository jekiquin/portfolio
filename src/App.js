import Banner from 'components/Banner';
import NavContext from 'hoc/NavContext';
import NavBar from 'components/NavBar';
import About from 'components/About';

function App() {
	return (
		<main className="App sm:text-base">
			<Banner />

			<div className="test">
				<NavContext>
					<NavBar />
				</NavContext>
				<About />
			</div>
		</main>
	);
}

export default App;
