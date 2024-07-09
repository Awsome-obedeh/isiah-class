// change this component to a client component
"use client"


import Link from 'next/link'
import React, { useState } from 'react'
import "./navbar.css"
// use state is a hook used to change somethinon the ui (browser)

export default function Navbar() {
  // create a state 
  // the use state has two values
  // 1 the main variable name,
  // 2 A function to change the main variable
  const [number, setNumber] = useState(1)
  // function to add 
  function add() {
    setNumber(number + 1)
  }

  return(

    <div>
      <nav className='navbar'>
        <div className="logo">
          <p>KUDA</p>
        </div>

        <div className="links">
          <Link href="#">Personal</Link>
          <Link href ="#">Business </Link>
          <Link href ="#">Company  </Link>
          <Link href ="#">Help </Link>
        </div>

        <div className="btn">
          <button className="sign-in">Sign</button>
          <button className="join">Join Kuda</button>
          <div className='flag'>
            1
              {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle opacity="0.3" cx="15" cy="15" r="15" fill="#008751"></circle><mask id="mask0_37774_3385_bc" maskUnits="userSpaceOnUse" x="6" y="7" width="18" height="16" style="mask-type: alpha;"><rect x="6.91406" y="7.29712" width="16.1724" height="15.4023" rx="3" fill="#E94D1E"></rect></mask><g mask="url(#mask0_37774_3385_bc)"><path d="M0.324219 4.1355H29.5134V26.0274H0.324219V4.1355Z" fill="#008751"></path><path d="M11.1875 4.05444H19.2956V25.9463H11.1875V4.05444Z" fill="white"></path></g><defs><clipPath id="clip0_37774_3385_bc"><rect width="29.1892" height="21.8919" fill="white" transform="translate(0.324219 4.1355)"></rect></clipPath></defs></svg> */}
          </div>
        </div>
      </nav>
    </div>
  )


  


  
}
