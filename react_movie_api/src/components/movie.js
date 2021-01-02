import React, { useEffect, useState } from 'react';


function Movie( selected ) {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch("/movies").then(response =>
        response.json().then(data => {
          setMovies(data.movies);
        })
      );
    }, []);
  
    return (
      <Container style={{ marginTop: 40 }}>
        <MovieForm
          onNewMovie={movie =>
            setMovies(currentMovies => [movie, ...currentMovies])
          }
        />
        <Movies movies={movies} />
      </Container>
    );
  }
  
  export default Movie;

    