import React from 'react'
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom"; 
import mv1c from 'C:/work/DEV/REACT/stream-now/src/assets/mv1c.jpg';
import mv2 from 'C:/work/DEV/REACT/stream-now/src/assets/mv2.jpeg';
import mv3 from 'C:/work/DEV/REACT/stream-now/src/assets/mv3.jpg';


const pushbehind = {
    position: 'absolute',
    zIndex: -2,
    maxHeight: 20
    // top: 0,
    // left: 0,
    
}



function MovieSlider() {
    // const [Url , setUrl] = useState('./');
    
    // function handletrailerclick(){
    //     <Route>

    //     </Route>
    // }


    return (
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={mv2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>
                <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=uYPbbksJxIg' }} >
                        Watch Trailer
                </Link>
                </h5>
            </div>
            </div>
            <div className="carousel-item">
            <img src={mv1c} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>
                <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=J7nJksXDBWc' }} >
                        Watch Trailer
                </Link>
                </h5>
            </div>
            </div>
            <div className="carousel-item">
            <img src={mv3} className="d-block w-100 h" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>
                <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=eOrNdBpGMv8' }} >
                        Watch Trailer
                </Link>
                </h5>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>


        </div>

    )
  
}

export default MovieSlider
