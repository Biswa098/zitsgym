import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { userverify } from '../../services/Apis';
import "../../styles/mix.css";
import CircularProgress from '@mui/material/CircularProgress';
const otp = () => {
  const [spin,setSpin] = useState(false);
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [otp,setOtp]=useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const loginUser = async(e)=>{
    e.preventDefault();
    if(otp===""){
      toast.error("Enter OTP")
    }else if(otp.length!=6){
      toast.error("Enter Correct OTP")
    }else{
      setSpin(true);
      const data = {
        otp,email:location.state
      }
      const response = await userverify(data);
      if(response.status===200){
        localStorage.setItem("userdbtoken",response.data.userToken);
        localStorage.setItem("profile",JSON.stringify(response.data.preuser));
        toast.success(response.data.message);
        setTimeout(()=>{
          navigate("/home");
        },3000)
      }else{
        setSpin(false);
        toast.error(response.response.data.error)
      }
    }
  }
  const loginUserfake = async(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter your OTP Here</h1>
          </div>
          <form action="">
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="number" name='otp' id=""  onChange={(e)=>{setOtp(e.target.value)}} placeholder='enter your OTP' />
            </div>
            <button className="btn" onClick={spin?loginUserfake:loginUser} >{spin?<CircularProgress style={{marginLeft:0,height:"1.5rem",width:"1.5rem"}}/>:<span>Submit</span>}</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default otp