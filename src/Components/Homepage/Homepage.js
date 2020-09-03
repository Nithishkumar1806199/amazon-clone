import React from 'react'
import './Homepage.css'
import Header from '../Header/Header'
import Products from '../Products/Products'
import {items} from '../ItemsList'
function Homepage() {
    
    return (
        <div>
            {/* Header */}
            <div>
            <Header/>
            </div>

            {/* Banner */}
            <div className="Banners">
                {/* <img src="https://i0.wp.com/itsfacile.com/wp-content/uploads/2018/04/amazon-pic.png?fit=1200%2C537&ssl=1" alt="Banner" ClassName="Banners__image"/> */}
            {/* Carosel */}
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i0.wp.com/itsfacile.com/wp-content/uploads/2018/04/amazon-pic.png?fit=1200%2C537&ssl=1" className="d-block w-100" alt="..."/>
                    </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            </div>
            {/* Products */}
        <div className="Products">

    <div className="container">
    <div className="row ">

    <div className="col">
    <Products id ={items[0].id} title={items[0].Title} 
    detail={items[0].detail} 
    image={items[0].image} price={items[0].Price} ratings={items[0].rating}/>
    </div>
    <div className="col">
   <Products id ={items[1].id} title={items[1].Title} 
    detail={items[1].detail} 
    image={items[1].image} price={items[1].Price} ratings={items[1].rating}/>
    </div>
    <div className="col">
   <Products id ={items[2].id} title={items[2].Title} 
    detail={items[2].detail} 
    image={items[2].image} price={items[2].Price} ratings={items[2].rating}/>
    </div>
    <div className="col">
   <Products id ={items[6].id} title={items[6].Title} 
    detail={items[6].detail} 
    image={items[6].image} price={items[6].Price} ratings={items[6].rating}/>
    </div>
   </div>

   <div className="row ">
    <div className="col">
   <Products id ={items[3].id} title={items[3].Title} 
    detail={items[3].detail} 
    image={items[3].image} price={items[3].Price} ratings={items[3].rating}/>
    </div>
    <div className="col">
   <Products id ={items[4].id} title={items[4].Title} 
    detail={items[4].detail} 
    image={items[4].image} price={items[4].Price} ratings={items[4].rating}/>
    </div>
    <div className="col">
   <Products id ={items[5].id} title={items[5].Title} 
    detail={items[5].detail} 
    image={items[5].image} price={items[5].Price} ratings={items[5].rating}/>
    </div>
    <div className="col">
   <Products id ={items[7].id} title={items[7].Title} 
    detail={items[7].detail} 
    image={items[7].image} price={items[7].Price} ratings={items[7].rating}/>
    </div>
    </div>
        </div>
        </div>
        </div>
    )
}

export default Homepage
