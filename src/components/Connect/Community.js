import './Community.css'
import React from 'react'
const tcolor = {color : 'white'}
const mkres = {
  display : 'inline-Block'
}
export default function Community() {
  return (
    <div className='App'>
        <div><h1 style={tcolor}>
          This page is under development :(<br/> join us on discord
          </h1>
          <h2 style={tcolor}> <u>
            Feedback form </u>
          </h2>
          </div>
          <div class="mb-3" style={mkres}>
            <label for="exampleFormControlInput1" class="form-label" style={mkres}>Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={mkres}/>
          </div>
          <br/>
          <div class="mb-3" style={mkres}>
            <label for="exampleFormControlTextarea1" class="form-label" style={mkres}>Your Review</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" style={mkres}></textarea>
          </div>
    </div>
  )
}
