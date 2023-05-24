import './App.css';
import Character from './components/Character';
import { characters } from './data';

function App() {
	return (
		<div className='App'>
			<h1 className='main-title'>The Simpsons</h1>
			<div className='container'></div>
			<Character character={characters[0]} />
			<Character character={characters[1]} />
			<Character character={characters[2]} />
			<Character character={characters[3]} />
			<Character character={characters[4]} />
			<Character character={characters[5]} />
			<Character character={characters[6]} />
			<Character character={characters[7]} />
		</div>
	);
}

export default App;
