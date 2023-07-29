import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Home } from './pages/Home.jsx';
import { Impressum } from './pages/Impressum.jsx';
import { NotFound } from './pages/_404.jsx';

import './style.css';

import { Header } from './parts/header/header.jsx'

export function App() {
	return (
		<LocationProvider>

			<Header />

			<main className="main">
				<Router>
					<Route path="/" component={Home} />
					<Route path="/impressum" component={Impressum} />
					<Route default component={NotFound} />
				</Router>
			</main>

		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
