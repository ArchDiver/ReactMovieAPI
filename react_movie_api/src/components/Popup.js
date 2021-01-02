import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2> <br></br>
				<p className="director">Director: {selected.Director}</p>
				<p className="rating">IMDB Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt='Poster'/>
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
				<h3>Like &#128077;</h3> 
				<h3>Dislike &#128078;</h3>
			</div>
		</section>
	)
}

export default Popup