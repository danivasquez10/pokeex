import { useRef } from "react"
import {useName} from "../Inputt/useName"
import { useNavigate } from "react-router"



function Common() {

const inputRef = useRef()    
const { setName, name } = useName()
const navigate = useNavigate()

const handleSetName = ()=> {
if (! inputRef.current.value)
    return
    setName(inputRef.current.value)
    navigate('/pokedex')
}


  return (
    <div className="mh">
{name && <h2 className="ludo"> Hola {name}!</h2>} 
<h1>POKEDEX</h1>
<h4>Para poder comenzar, Ingresa tu nombre</h4>

    <input type="text" placeholder="Escribe tu nombre" ref={inputRef}/>
    <button onClick={handleSetName}>COMENZAR</button>



    </div>
  )
}

export default Common