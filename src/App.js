import Banner from 'components/Banner';
import NavContext from 'hoc/NavContext';
import NavBar from 'components/NavBar';
import About from 'components/About';
import Contact from 'components/Contact';

function App() {
	return (
		<main className="App sm:text-base">
			<Banner />

			<div>
				<NavContext>
					<NavBar />
				</NavContext>
				<About />
				<Contact />
			</div>
		</main>
	);
}

export default App;
