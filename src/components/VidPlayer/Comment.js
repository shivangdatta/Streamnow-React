import React from 'react'

const spacingcss = {
  objectFit : 'center',
  display: 'inline-block',
  minWidth : 400
}
export default function Comment() {
  return (
    <div style={spacingcss}>
      <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='write to us :)'></textarea>
            </div>

    </div>
  )
}
