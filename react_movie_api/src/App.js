import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import Movie from './components/movie'
// import Vote from 'components/vote'


function App() {
  const db = "https://localhonst/5000/movies";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    checked: false
  });
  const apiurl = "http://www.omdbapi.com/?apikey=b17dc23e";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const checkMovie = (id, db) => {
    axios.all([
      axios.get(apiurl + "&i=" + id)
      
    ])
      .then(({ data }) => {
        let result = data;

        console.log(result);

        setState(prevState => {
          return { ...prevState, selected: result }
        });
      });
  }

  const openPopup = (id, checkMovie, db)  => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }


  const handleVote = id => {    
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  // const closePopup = () => {
  //   setState(prevState => {
  //     return { ...prevState, selected: {} }
  //   });
  // }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} checkMovie={checkMovie} openPopup={openPopup} /> {/*  handleVote={handleVote*/}

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}



export default App;
