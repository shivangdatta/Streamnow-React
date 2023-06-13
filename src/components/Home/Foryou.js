import React from 'react'
import fy1 from 'C:/work/DEV/REACT/stream-now/src/assets/fy1.jpg'
import fy2 from 'C:/work/DEV/REACT/stream-now/src/assets/fy2.jpeg'
import fy3 from 'C:/work/DEV/REACT/stream-now/src/assets/fy3.jpeg'
import fy4 from 'C:/work/DEV/REACT/stream-now/src/assets/fy4.jpeg'
import { Link } from 'react-router-dom'
const cardwidthcss = {
    width : '18rem',
    display: 'inline-block',
    
}

export default function Foryou() {
  return (
    <div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={fy1} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Birds of Prey</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=kGM4uYZzfu0' }} >
              <div href="#" className="btn btn-info">Watch</div>
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={fy2} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Jhon Wick 4</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=qEVUtrk8_B4' }} >
              <div href="#" className="btn btn-info">Watch</div>
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={fy3} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Transformers</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=itnqEauWQZM' }} >
              <div href="#" className="btn btn-info">Watch</div>
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={fy4} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Spiderman</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=g4Hbz2jLxvQ' }} >
              <div href="#" className="btn btn-info">Watch</div>
            </Link>
        </div>
        </div>
    </div>
  )
}
