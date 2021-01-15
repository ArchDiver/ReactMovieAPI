import React from 'react';
// import { Button } from 'semantic-ui-react'

function Popup({ selected, checkMovie, closePopup, handleVote, db }) {
	const ID = selected.imdbID
	console.log(ID)
	// const movie = db.ID;
	// console.log(movie)

	

	

	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2> <br></br>
				<p className="director">Director: {selected.Director}</p>
				<p className='imdbID'>IMDB ID: {selected.imdbID}</p>
				<p className="rating">IMDB Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt='Poster'/>
					<p>{selected.Plot}</p>
				</div>
				<div>
					<div class="ui right labeled button">
						<button className="likeButton" class="ui icon button" tabindex="0" onClick={handleVote}>
						<i aria-hidden="true" class="thumbs up outline icon"></i> 
						Like
						</button>
						<a class="ui left pointing basic label">25
							{/* {db.selected.likes} */}
						</a>
					</div>
					<div class="ui left labeled button">
						<a class="ui right pointing basic label">30
							{/* {db.select.dislikes} */}
						</a>
						<button className="dislikeButton" class="ui icon button" tabindex="0" onClick={handleVote}>
							<i aria-hidden="true" class="thumbs down outline icon"></i> 
							Dislike
						</button>
					</div>
					<div class="ui left labeled button">
						<a class="ui right pointing basic label">50
							{/* {db.selected.ratings} */}
						</a>
						<button className="ratingButton" class="ui icon button" tabindex="0">
							<i aria-hidden="true" class="">Rating</i> 
						</button>
					</div>
				</div>
				<br></br>
				{/* <h3>&#128077;Likes: {movie.likes}  &#128078;Dislike: {movie.dislikes} </h3>  */}
				<button className="close" onClick={closePopup}>Close</button>
				
			</div>
		</section>
	)
}

// export default Popup

