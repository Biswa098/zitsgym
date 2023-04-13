import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import {  Link } from 'react-router-dom';
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  const handelclick = () => {
    setMenu(false);
    window.scrollTo({ top: 800, left: 100, behavior: 'smooth' });
  }
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menu === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.4rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu" style={{borderRadius:'6%'}}>
          <li onClick={()=>{window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });setMenu(false)}}><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></li>
          <li onClick={handelclick}><Link to="/exercises" style={{ color: 'inherit', textDecoration: 'inherit'}}>Exercises</Link></li>
          <li onClick={handelclick}><Link to="/diets" style={{ color: 'inherit', textDecoration: 'inherit'}}>Diets</Link></li>
          <li onClick={handelclick}><Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profile</Link></li>
          {mobile && <li onClick={()=>setMenu(false)}>
            <button className="btn" style={{backgroundColor:'transparent',border:'2px solid white',borderRadius:'20%'}}>x</button>
          </li>}
        </ul>
      )}
    </div>
  );
};

export default Header;
