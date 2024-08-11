import React from 'react'

export default function Wrapper({children, color}) {
  return (
    <div className={`quote-box-container flex-column d-flex justify-content-center align-items-center bg-${color}`}>
      <div id="quote-box" className="bg-light p-5 rounded-2">{children}</div>
      <div className="text-light pt-2"> By Azarel Nieves</div>
    </div>
  )
}
