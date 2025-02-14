import axios from "axios"
import { useEffect, useState } from "react"





// eslint-disable-next-line react/prop-types
function CardPokemon({url}) {
  const [pokemon,setPokemon] = useState() 
  console.log(pokemon);

useEffect(()=>{
axios.get(url)
.then(({data}) => setPokemon(data));

},[url])

if (!pokemon) 
   return <p>cargando...</p>



return(
<div className="todo">
 <div className="all">
<div className="card">
 
  <div className="img">
  <img className='imgCard' src={pokemon.sprites.front_default
  } alt={pokemon?.name} />
  </div>

  <span><h2 className="tittleCard">{pokemon?.name}</h2> </span>
  <p className="job"><ul className="listCard">
      <li className="itemsCard">species: {pokemon.species.name}</li>
      <li className="itemsCard">height: {pokemon.height}</li>
      <li className="itemsCard">weight: {pokemon?.weight}</li>
    </ul> </p>
</div>
</div>
</div>
)
}

export default CardPokemon