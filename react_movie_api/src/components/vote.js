import React from 'react'
immport axios from 'axios'

function Vote( selected, like, db ) {
    if (like == True){
        axios("https://localhonst/5000/", {imdbID : selected.imdbID} )
        .then( (response) => {
            if (like == True) {

                axios
                axios.post("https://localhonst/5000/", )
            }

    }
    } )


}

export default Vote;

