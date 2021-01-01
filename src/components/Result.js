import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt='Poster'/>
			<h3>{result.title}</h3>
		</div>
	)
}

export default Result