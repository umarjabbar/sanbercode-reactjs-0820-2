import React from "react"
import {MovieProvider} from "./movieContext.js"
import MovieList from "./movieList.js"
import MovieForm from "./movieForm.js"

const Movie = () =>{
  return(
    <MovieProvider>
      <MovieList/>
      <MovieForm/>
    </MovieProvider>
  )
}

export default Movie