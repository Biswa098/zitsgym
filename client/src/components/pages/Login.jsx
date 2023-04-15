import React, { useState, useEffect } from "react";
import "../../styles/mix.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunction } from "../../services/Apis";
import CircularProgress from '@mui/material/CircularProgress';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [spin,setSpin] = useState(false);
  const [passshow, setPassshow] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 100, behavior: "smooth" });
  }, []);
  const sendOtp = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (password === "") {
      toast.error("Enter your Password");
    } else if (password.length < 6) {
      toast.error("Password Must be 6 digit");
    }else {
      setSpin(true);
      const data = {
        email: email,
        password: password
      };
      const response = await sentOtpFunction(data);
      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/otp", { state: email });
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
            <h1>Welcom back,Log in</h1>
            <p>Hi,we are glad to see you back. Please login.</p>
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
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={passshow ? "password" : "text"}
                  name="password"
                  id="p"
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>
            <div className="pani" onClick={spin?sendOtpfake:sendOtp}>
              {spin?<CircularProgress style={{marginLeft:"2rem",height:"1.5rem",width:"1.5rem"}}/>:<span>Login</span>}
              <div className="liquid" ></div>
            </div>
            <p>
              Don't have an account ?
              <NavLink
                style={{ textDecoration: "none", color: "var(--orange)" }}
                to="/resister"
              >
                Sign up
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none", color: "var(--orange)" }}
                to="/reset"
              >
                Forgot Password ?
              </NavLink>
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
