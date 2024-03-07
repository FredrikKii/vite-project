const Böcker = (props => {
	let css = ''
	if (props.Antal < 1 ) {

	}
	return (
		<section className="Böcker">
			<div className="image"></div>
			<h3> Boknamn: {props.titel} </h3>
			<p> Författare: {props.författare} </p>
			<span className={css}> {props.antal} böcker kvar</span>
			<br></br>
			<button>Låna</button>
		</section>
	)
})

export default Böcker