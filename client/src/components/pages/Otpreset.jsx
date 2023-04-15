import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { resetpassword } from '../../services/Apis';
import "../../styles/mix.css";
import CircularProgress from '@mui/material/CircularProgress';
const Otpreset = () => {
  const [spin,setSpin] = useState(false);
  const [otp,setOtp]=useState("");
  const [password1,setPassword1]=useState("");
  const [password2,setPassword2]=useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [passshow, setPassshow] = useState(true);
  const resetpass = async(e)=>{
    e.preventDefault();
    if(otp===""){
      toast.error("Enter OTP")
    }else if(otp.length!=6){
      toast.error("Enter Correct OTP")
    }else if (password1 === "") {
        toast.error("Enter your Password");
    }else if (password2 != password1) {
        toast.error("Two Password Feilds Must Be Same");
    }else if (password1.length < 6) {
        toast.error("Password Must be 6 digit");
    }else{
      setSpin(true);
      const data = {
        email:location.state,otp,password:password1
      }
      const response = await resetpassword(data);
      if(response.status===200){
        toast.success(response.data.message);
        setTimeout(()=>{
          navigate("/");
        },2000)
      }else{
        setSpin(false);
        toast.error(response.response.data.error)
      }
    }
  }
  const resetpassfake = async(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter your Password And OTP Here</h1>
          </div>
          <form action="">
            <div className="form_input">
            <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={passshow ? "password" : "text"}
                  name="password"
                  id="p1"
                  onChange={(e) => setPassword1(e.target.value)}
                  placeholder="enter your Password"
                />
                <div
                  className="showpass"
                  onClick={() => {
                    setPassshow(!passshow);
                  }}
                >
                  {passshow ? "Show" : "Hide"}
                </div>
              </div>
            <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={passshow ? "password" : "text"}
                  name="password"
                  id="p2"
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="enter your Password"
                />
              </div>
              <label htmlFor="otp">OTP</label>
              <input type="number" name='otp' id=""  onChange={(e)=>{setOtp(e.target.value)}} placeholder='enter your OTP' />
            </div>
            <button className="btn" onClick={spin?resetpassfake:resetpass} >{spin?<CircularProgress style={{marginLeft:0,height:"1.5rem",width:"1.5rem"}}/>:<span>Submit</span>}</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Otpreset