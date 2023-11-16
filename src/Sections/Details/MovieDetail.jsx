import React from "react";
import "./MovieDetail.css"
import { useLocation } from "react-router-dom";

export default function MovieDetail(props) {
  const location = useLocation()
  const movie = location.state

  return (
    <div>
      <div className="container">


        <div className="row">
          <div className="col">
            <h1>{movie.titulo}</h1>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <img src={movie.portada} className="detail-movie-img" alt="" />
          </div>
          <div className="col">
           
            <ul>
              <li>Actores1</li>
              <li>Actores2</li>
            </ul>
            <p>Duracion </p>
            <p>Fecha</p>
            <p>Calificacion</p>
          </div>
        </div>

        <div className="row">
          <p>Sinopsis</p>
        </div>



      </div>
    </div>
  );
}
