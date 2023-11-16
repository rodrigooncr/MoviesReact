import React from "react"
import './Cards.css'
import { useState } from "react"
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import EmptyImg from "../../assets/empty_img.jpg"


export default function CardComponent ({ titulo ,portada, sinopsis}){


    const [isFavorite,setFavorite] = useState(false)


    const handlerClick = () =>{
        setFavorite(isFavorite ? false: true )

    }

    const handlerError = (e)=>{
        e.target.src = EmptyImg

    }
  

    return (

        <>
           
                <div className=" card ">
                      
                        <img className= 'card-img card-img-top size '    src={portada} onError={()=>handlerError(e)}  alt="..."/>
                    

                   

                    
                    <div className="card-body ">
                            <h5 className="card-title">{titulo}</h5>
                            <p className="card-text">{sinopsis}</p>
                            <div>
                                {

                                    isFavorite ? (
                                        <FaHeart className="Heart-full"  onClick={handlerClick}/> 
                                    ):(
                                        <FiHeart className="Heart-empty"  onClick={handlerClick}/>
                                    )
                                    

                                }
                                
                            
                            </div>
                            
                     </div>
                </div>
            

           
        </>

    )
}