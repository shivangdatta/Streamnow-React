import React, { Component } from 'react'
import Navbar from './Navbar';
import MovieSlider from './MovieSlider';
import Catogeries from './Catogeries/Catogeries';
import Popular from './Popular';
import Random from './Random';
import Foryou from './Foryou';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const headingcss = {
  textAlign: 'left',
  marginLeft : 40,
}
const maindivcss = {
  backgroundColor: 'black',
  color: 'white'
}

const blackcolor = {
  color : 'black'
}
function donothing(){}
export class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div >
          <div className='App' style={maindivcss}>

            <MovieSlider/>
            {/* <><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut exercitationem corrupti et sunt harum optio ex dolorum ab explicabo soluta quod sequi magnam, aperiam recusandae nihil cupiditate illo facilis?</p></> */}
            <br/><br/>
            {/* <div className="background">
              <div className="content">
              </div>
            </div> */}
            <h3 style={headingcss}>Categories</h3>
            
            <Catogeries/>
            <br/>
            <h3 style={headingcss}>Popular</h3>
            <br/>
            <Popular/>
            <br/>
            <h3 style={headingcss}>Random</h3>
            <br/>
            <Random/>
            <br/>
            <h3 style={headingcss}>For you</h3>
            <br/>
            <Foryou/>
            <br/>
            <br/>
            <br/>

          </div>

          <section id="contact">
        
        <h1 className="section-header">Reach Out</h1>
        
        <div className="contact-wrapper">
        
          
          <form id="contact-form" className="form-horizontal" role="form" >
            
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" defaultValue="" required/>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" defaultValue="" required/>
              </div>
            </div>

            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
            
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
            
            </button>
            
          </form>
          

          
            <div className="direct-contact-container">

              <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Delhi, India</span></i></li>
                
                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:9654447742" title="Give me a call">96-xxx-xx-93</a></span></i></li>
                
                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">shivangdatta@gmail.com</a></span></i></li>
                
              </ul>

              <hr/>
              <ul className="social-media-list">
                <li >
                  <a href="https://www.linkedin.com/in/shivang-datta-aa8127256/" className='contact-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blackcolor" className="bi bi-linkedin" viewBox="0 0 16 17">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  </a>
                </li>

                
                <li>
                  <a href="https://github.com/shivangdatta" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blackcolor" className="bi bi-github" viewBox="0 0 16 17">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  </a>
                </li>
              </ul>
              <hr/>

              <div className="copyright">&copy; NO RIGHTS RESERVED :)</div>

            </div>
          
        </div>
        
      </section>
      </div>
    )
  }
}

export default Home
