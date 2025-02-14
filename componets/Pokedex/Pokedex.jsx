import { useEffect, useState } from "react"
import { useName } from "../Inputt/useName"
import axios from "axios"
import ListPokemon from "./ListPokemon"



 const pokedex_api = 'https://pokeapi.co/api/v2'

function Pokedex() {
    const [pokemon,setPokemon] = useState([])
    const [ filterPokemon, setFilterPokemon ] = useState(pokemon)
    const { name } = useName()
    const [seach, setSeach] = useState()
    const [selectType,setSelectType] = useState('all')
    const [type,setType] = useState([])

    const getInitialPokemon = () => {
        axios.get(`${pokedex_api}/pokemon?limit=50`)
    .then(({data})=>{
      setPokemon(data.results)
      setFilterPokemon(data.results)
    })
}
useEffect(()=>{
  axios.get(`${pokedex_api}/type?limit=18`)
  .then(({data}) => {setType(data.results)})
},[])

useEffect(()=>{
    getInitialPokemon() 
},[])
   
useEffect(()=>{
  if (!seach) {
    setFilterPokemon(pokemon)
    return
  }
      setFilterPokemon(pokemon.filter(p=>
        p.name.toLowerCase().includes(seach.toLowerCase())
      ))
},[seach,pokemon])

useEffect(()=>{
if (selectType === 'all'){
  getInitialPokemon()
  return
}
axios.get(`${pokedex_api}/type/${selectType}`)
.then(({data}) => {
  const typePokemon = data?.pokemon.map(p => p?.pokemon)
  setPokemon(typePokemon);
})


},[selectType])


const searchPokemon = () => {
  if (!seach) {
    getInitialPokemon()
    return
  }
 axios.get(`${pokedex_api}/pokemon/${seach}`)
 .then(({data}) => {
  if (selectType !== 'all') {
  const isOfType = data.types.some(t => t.type.name === selectType)
  if (!isOfType){
    alert('El pokemon no es el tipo seeleccionado')
    return
  }
  }console.log(data);
  
 })
}

    
  return (
<div>
   {name && <p className="bienvenida"> Bienvenido {name} aqui podras encontrar tu pokemon favorito </p>} 
        <div className="koko">   
    <h1>Pokedex</h1>
    <input type="text" 
           placeholder="buscar un pokemon"
           value={seach}
           onChange={(e)=>{setSeach(e.target.value)}} />
           <button className="boton" onClick={searchPokemon}>search</button>

           <select 
           value={selectType}
           onChange={(e)=>{setSelectType(e.target.value)}}>
           
            
            <option value="all">all</option>
            {type.map(t=>(
              <option key={t.name} value={t.name}>
                {t.name}
              </option>
            ))}
           </select>
           </div>        
           <ListPokemon pokemon={filterPokemon} />
      
</div>
  )
}

export default Pokedex