import React, { useEffect, useState } from 'react'
import CardComponent from '../../Components/Cards/Cards'
import { Link } from 'react-router-dom'

export default function ListaPeliculas(props) {

    const [search,setSearch] = useState('')
    const [peliculas,setPeliculas] = useState([])
    const [loading, setLoading] = useState(true)
    const [pelisFilter,setPelisFilter] = useState([])

    const handlerChange =(e) => {
        /* save data */
        setSearch(e.target.value)

        if(!e.target.value){
            setPelisFilter(peliculas) 
        }else{
            
            let peliculasFilter = peliculas.filter(movie=> movie.titulo.toLowerCase().includes(search.toLowerCase()))
            setPelisFilter(peliculasFilter)  
        }

    }
    useEffect(()=>{

        if(loading){
            fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
            .then(response => response.json())
            .then(data =>{setPeliculas(data.peliculas)
            setPelisFilter(data.peliculas) 
            setLoading(false) })
        }
     
    },[])

    if(loading){
        return (
            <div className="text-center text-light">
                <div className="spinner-border" role="status">
                   
                </div>
                </div>
        )
    }else{

        return (
            <>
        
                <div className='conrainer text-center'>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-4 ">
                                <p>Busqueda de Peliculas {props.genero}</p>
                                <input type="text" placeholder='Search' className='form-control ' onChange={handlerChange} value={search}/>
                        </div>
        
                    </div>
        
                    <div className="row my-5">
        
                        {
                            pelisFilter.map((movie,index) => {
        
                               return (
                                <div className="col-6 col-md-3  card-movie my-5">
                                    <Link to={`/detalle/${movie.titulo}`} state={movie}>
                                        <CardComponent key={index} titulo={movie.titulo} sinopsis={movie.sinopsis} portada={movie.portada}> </CardComponent>
                                    </Link>
                                </div>

                               ) 
        
                            }  )
     
                        }

                        {
                            pelisFilter.length ==0 && <h2 className='text-light'>Sin coincidencias</h2>
                        }
        
        
                    </div>
                </div>
              
            </>
          )
    }

 
}
