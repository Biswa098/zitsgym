import React, { useState } from "react";
import "../../styles/mix.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunctionreset } from "../../services/Apis";
import CircularProgress from '@mui/material/CircularProgress';
const Reset = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [spin,setSpin] = useState(false);
    const sendOtp = async (e) => {
        e.preventDefault();
        if (email === "") {
          toast.error("Enter Your Email");
        } else if (!email.includes("@")) {
          toast.error("Enter Valid Email");
        }else {
          setSpin(true);
          const data = {
            email: email,
          };
          const response = await sentOtpFunctionreset(data);
          if (response.status === 200) {
            toast.success(response.data.message);
            setTimeout(() => {
              navigate("/otpreset", { state: email });
            }, 2000);
          } else {
             setSpin(false);
            toast.error(response.response.data.error);
          }
        }
      };
      const sendOtpfake = async (e) => {
        e.preventDefault();
      };
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>First Verfiy its you !</h1>
          </div>
          <form action="">
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email addresss"
              />
            </div>
            <div className="pani" onClick={spin?sendOtpfake:sendOtp}>
              {spin?<CircularProgress style={{marginLeft:"2rem",height:"1.5rem",width:"1.5rem"}}/>:<span>Verify</span>}
              <div className="liquid" ></div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Reset