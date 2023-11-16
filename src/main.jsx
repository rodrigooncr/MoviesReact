import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Sections/Home/Home.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaPeliculas from "../src/Sections/ListaPeliculas/ListaPeliculas.jsx"


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
 
} from "react-router-dom";
import MovieDetail from './Sections/Details/MovieDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Home/>,
      errorElement: <h2>Error 404, No existe la Pagina</h2>,
      children: [
        {
          path: "/",
          element:  <h1>Hijo de home</h1>,
        },
        {
          path: "/comedia",
          element:  <ListaPeliculas genero="comedia" key="comedia"></ListaPeliculas>,
        },
        {
          path: "/clasicas",
          element: <ListaPeliculas genero="clasicas" key="clasicas"></ListaPeliculas>,
        },
        {
          path: "/independientes",
          element:  <ListaPeliculas genero="independientes" key="independientes"></ListaPeliculas>,
        },
      ]
  },
  {
    path: "/detalle/:titulo",
    element: <MovieDetail></MovieDetail>,

  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
 
)
