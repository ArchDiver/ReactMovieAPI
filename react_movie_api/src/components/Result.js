import React from 'react'

function Result({ result, openPopup, checkMovie, db }) {
	return (
		<div className="result" 
			onClick={() => { 
				// checkMovie(result.imdbID);
				openPopup(result.imdbID); 
				}}>
			<img src={result.Poster} alt='Poster'/>
			<h3>{result.Title}</h3>
		</div>
	)
}

// export default Result