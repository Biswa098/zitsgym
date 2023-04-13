import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../../styles/mix.css'
const Error = () => {
  useEffect(() => {
    window.scrollTo({ top: 800, left: 100, behavior: 'smooth' })
  
   }, []);
  return (
    <>
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Oops!You are not Logged in</h1>
          <p style={{textDecoration:"none",color:"green"}}><NavLink to="/">Login</NavLink></p>
        </div>
        
      </div>
    </section>
  </>
  )
}

export default Error