import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../../styles/mix.css'
const Error = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  useEffect(() => {
    if(mobile)
    window.scrollTo({ top: 1200, left: 100, behavior: 'smooth' })
    else
    window.scrollTo({ top: 800, left: 100, behavior: 'smooth' })
   }, []);
  return (
    <>
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Oops!You are not Logged in</h1>
          <NavLink style={{textDecoration:"none",marginTop:"1rem"}} to="/"><div className="pani">
              <span>Login</span>
              <div className="liquid"></div>
            </div></NavLink>
        </div>
        
      </div>
    </section>
  </>
  )
}

export default Error