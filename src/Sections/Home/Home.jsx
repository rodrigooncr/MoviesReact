
import Portada from "../Portada/Portada"
import { Outlet } from "react-router-dom"
import Menu from "../Menu/Menu.jsx"

function Home(){

    return(
        <>

        {/* Menu
        portada 
        lista de peliculas 
        footer */}
            <Menu></Menu>
           <Portada></Portada>
           <Outlet></Outlet>


        </>
       
    )
    
}

export default Home
