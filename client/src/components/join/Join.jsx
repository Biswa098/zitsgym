import React, { useState,useEffect } from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Join = () => {
  const navigate = useNavigate();
  const userValid = ()=>{
    let token = localStorage.getItem("userdbtoken");
    if(token){
      console.log(token)
    }else{
      navigate("/error")
    }
  }
  useEffect(()=>{
    userValid();
  },[]);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmcg433",
        "template_dpoauoa",
        form.current,
        "DQ10M5_XGcfgci_4T"
      )
      .then(
        (result) => {
          alert(result.text+',Email sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr className="hrr" />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email Here"
          />
          <button className="btn btn-j">Join</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
