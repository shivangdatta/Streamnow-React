import React from 'react'
import cl1 from 'C:/work/DEV/REACT/stream-now/src/assets/cl1.jpeg'
import cl2 from 'C:/work/DEV/REACT/stream-now/src/assets/cl2.jpg'
import cl3 from 'C:/work/DEV/REACT/stream-now/src/assets/cl3.jpg'
import cl4 from 'C:/work/DEV/REACT/stream-now/src/assets/cl4.jpg'
import { Link } from 'react-router-dom'

const cardwidthcss = {
    width : '18rem',
    display: 'inline-block',
    
}

export default function Random() {
  return (
    <div id="random">
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={cl1} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Batman</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=mqqft2x_Aa4' }} >
              <div className="btn btn-warning">
                Watch
              </div>
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={cl2} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Minions</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=eisKxhjBnZ0' }} >
              <div className="btn btn-warning">
                Watch
              </div>
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={cl3} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">The Casino</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=EJXDMwGWhoA' }} >
              <div className="btn btn-warning">
                Watch
              </div>
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={cl4} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">The GodFather</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=UaVTIH8mujA' }} >
              <div className="btn btn-warning">
                Watch
              </div>
            </Link>
        </div>
        </div>
    </div>
  )
}
