import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App({ data }) {
	return (
		<>
			<Header />
			<Main data={data} />
			<Footer />
		</>
	);
}

export default App;
