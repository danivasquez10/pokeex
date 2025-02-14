import { Routes,Route } from "react-router"
import Common from "../componets/Home/Common"
import Pokedex from "../componets/Pokedex/Pokedex"



function AppRouters() {
  return (

    <Routes>
       <Route path='/' element={< Common />}/>

       <Route path='/pokedex' >
          <Route index element={<Pokedex/>}/>
       </Route>

    </Routes>
  )
}

export default AppRouters