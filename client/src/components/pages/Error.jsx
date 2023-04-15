import { NavLink } from 'react-router-dom';
import '../../styles/mix.css'
const Error = () => {
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