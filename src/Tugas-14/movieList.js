import React, {useContext} from "react"
import {MovieContext} from "./movieContext"

const MovieList = () =>{
  const [movie] = useContext(MovieContext)

  return(
    <ul>
      {movie.map(el=>{
        return <li>name: {el.name} {el.lengthOfTime} minutes</li>
      })}
    </ul>
  )

}

export default MovieList