import Banner from 'components/Banner';
import NavContext from 'hoc/NavContext';
import NavBar from 'components/NavBar';
import About from 'components/About';
import Contact from 'components/Contact';
import Projects from 'components/Projects';
import Loading from 'components/Loading';

function App() {
	return (
		<main className="App relative sm:text-base">
			<Loading />
			<Banner />
			<div>
				<NavContext>
					<NavBar />
				</NavContext>
				<About />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}

export default App;
