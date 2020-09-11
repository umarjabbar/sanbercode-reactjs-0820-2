import React from "react"
import {DaftarBuahProvider} from "./ContextBuah"
import DaftarBuahList from "./ListBuah"
import DaftarBuahForm from "./FormBuah" 

const Movie = () =>{
  return(
    <>
      <DaftarBuahProvider>
        <DaftarBuahList/>
        <DaftarBuahForm/>
      </DaftarBuahProvider>
    </>
  )
}

export default Movie
