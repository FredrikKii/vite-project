import './App.css'
import Böcker from './Böcker'

function App() {

  return (
	<>
	<header>
    <h1>Välkommen till Bibblan!</h1>
	</header>
	<h2> Våra böcker</h2>
	<main>
		<section className="Books">
		<div className="böcker">
			<Böcker titel="Gullivers resor" författare="Fredrik E" antal={10} />
			<Böcker titel="Konrads väg" författare="Sonny S" antal={2} />
			<Böcker titel="Liams äventyr" författare="Benny K" antal={10} />
			<Böcker titel="Julius vrede" författare="Helen N" antal={5} />
			<Böcker titel="Antons liv" författare="Solveig P" antal={0} />
			<Böcker titel="Jimmys Bil" författare="Evelina T" antal={9} />
			<Böcker titel="Dolkens Kniv" författare="Douglas D" antal={3} />
			<Böcker titel="Ryssen på flykt" författare="Fedor P" antal={22} />
		</div>
		</section>
	</main>
	</>
  )
}

export default App
