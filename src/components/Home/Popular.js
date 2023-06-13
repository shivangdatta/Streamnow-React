import React from 'react'
import pop1 from 'C:/work/DEV/REACT/stream-now/src/assets/pop1.jpg'
import pop2 from 'C:/work/DEV/REACT/stream-now/src/assets/pop2.jpg'
import pop3 from 'C:/work/DEV/REACT/stream-now/src/assets/pop3.jpg'
import pop4 from 'C:/work/DEV/REACT/stream-now/src/assets/pop4.jpg'
import { Link } from 'react-router-dom'

const cardwidthcss = {
    width : '18rem',
    display: 'inline-block',
    
}

export default function Popular() {
  return (
    <div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={pop1} className="card-img-top" alt="pop1"/>
        <div className="card-body">
            <h5 className="card-title">Monsters Inc</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=CGbgaHoapFM' }} >
                <div className="btn btn-danger">Watch</div>  
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={pop2} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Star Wars</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=8Qn_spdM5Zg' }} >
                <div className="btn btn-danger">Watch</div>  
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={pop3} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Mario 2023</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=TnGl01FkMMo' }} >
                <div className="btn btn-danger">Watch</div>  
            </Link>
        </div>
        </div>
      <div className="card mt-4 mx-4" style={cardwidthcss}>
        <img src={pop4} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Gaurdians of the Galaxy</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to='/VidPlayer' state={{ Url: 'https://www.youtube.com/watch?v=u3V5KDHRQvk' }} >
                <div className="btn btn-danger">Watch</div>  
            </Link>
        </div>
        </div>
    </div>
  )
}
