import React from "react";
import Pokemon from "./Pokemon";
import data from "../data";
import '../css/pokedex.css'

function Pokedex() {
  return (  
    <div className='container-pokedex'>
      {data.map((pokemon) =><Pokemon pokemon={pokemon} />)}
    </div>
  )
}
export default Pokedex;