import React, { useState, useEffect } from "react";
import "../../styles/mix.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunction } from "../../services/Apis";
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const mobile = window.innerWidth <= 768 ? true : false;
  useEffect(() => {
    if (mobile) window.scrollTo({ top: 1200, left: 100, behavior: "smooth" });
    else window.scrollTo({ top: 800, left: 100, behavior: "smooth" });
  }, []);

  const sendOtp = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else {
      const data = {
        email: email,
      };
      const response = await sentOtpFunction(data);
      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/otp", { state: email });
        }, 3000);
      } else {
        toast.error("Something Went Wrong");
      }
    }
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
            </div>
            <div className="pani" onClick={sendOtp}>
              <span>Login</span>
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
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
