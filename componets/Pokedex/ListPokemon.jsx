/* eslint-disable react/prop-types */
import CardPokemon from "./CardPokemon"



function ListPokemon({pokemon}) {
  
    return (
  
    <div className="pupu">

    {pokemon.map(poke=>
       <CardPokemon 
       key={poke.name}
       url={poke.url}
       />
    )}
    </div>
  )
}

export default ListPokemon