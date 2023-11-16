import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselComponent() {

    return (

    <div className='cointaner-carousel'>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
          <div  className='container-img'>
            
              <img src="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png" alt="" />
              
          </div>
          <div className='container-img'>
              <img src="https://es.web.img3.acsta.net/pictures/23/05/03/14/13/0249485.jpg" alt="" />
          </div>
          <div className='container-img'>
              <img src="https://mx.web.img3.acsta.net/pictures/23/01/27/22/30/2366633.jpg" alt="" />
          </div>
      </Carousel>
      </div>
    )
   
}

