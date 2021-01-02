import React from 'react'

import Result from './Result'

function Results({ results, openPopup, checkMovie }) {
    return (
        <section className="results">
            {results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup} /> /* checkMovie={checkMovie}  */
            ))}
        </section>
    )
}

export default Results