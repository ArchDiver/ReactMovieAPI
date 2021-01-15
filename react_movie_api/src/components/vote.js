// import React from 'react'
import axios from 'axios'

function Vote( selected, like, db ) {
    if (like === true){
        axios.patch(db + '/' + selected.likes + 1)
    }
    else if (like === false){
        axios.patch(db + '/' + selected.dislikes + 1)
    }
}
// export default Vote;

