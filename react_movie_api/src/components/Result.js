import React from 'react'

function Result({ result, openPopup, checkMovie }) {
	return (
		<div className="result" onClick={() => { openPopup(result.imdbID); checkMovie(result.imdbID)}}>
			<img src={result.Poster} alt='Poster'/>
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result