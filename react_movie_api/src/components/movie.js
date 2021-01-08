import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Movie( selected,  db ) {
    if (selected.imdbID in db.imdbID){
        axios.all([
            axios.get(db.imdbID.likes),
            axios.get(db.imdbID.dislikes),
            axios.get(db.imdbID.ratings)
        ])
        .then(axios.spread(( likes, dislikes) => {
        return { likes, dislikes};
        }))
    }
    else {
        axios.post(db, {imdbID: selected.imdbID, title:selected.title, dislikes:0, likes:0, rating:0});
        axios.all([
            axios.get(db.imdbID.likes),
            axios.get(db.imdbID.dislikes),
            axios.get(db.imdbID.ratings)
        ])
        .then(axios.spread(( likes, dislikes, ratings) => {
        return { likes, dislikes, ratings};
        }))
    }
}
export default Movie;

    