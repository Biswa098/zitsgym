import React, { useState,useEffect } from 'react'
import '../../styles/mix.css'
import { ToastContainer, toast } from 'react-toastify';
import { resisterfunction } from '../../services/Apis';
import { useNavigate } from "react-router-dom";
const Resister = () => {
    const [passshow, setPassshow] = useState(true);

    const [inputdata, setInputdat] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        bw: "",
        height: ""
    })

    const navigate = useNavigate();

    const handelChange = (e) => {
        const { name, value } = e.target;
        setInputdat({ ...inputdata, [name]: value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, age, bw, height } = inputdata;

        if (name === "") {
            toast.error("Enter your Name")
        } else if (email === "") {
            toast.error("Enter your Email")
        }
        else if (!email.includes('@')) {
            toast.error("Enter Valid Email")
        }
        else if (password === "") {
            toast.error("Enter your Password")
        }
        else if (password.length < 6) {
            toast.error("Password Must be 6 digit")
        }
        else if (age > 100) {
            toast.error("Enter your Valid Age")
        }
        else if (age <10) {
            toast.error("Enter your Valid Age")
        }
        else if (bw === "") {
            toast.error("Enter your Body Weight")
        }
        else if (bw > 250 || bw<15) {
            toast.error("Enter your valid Body Weight")
        }
        else if (height === "") {
            toast.error("Enter your Height")
        }
        else if (height >300 || height< 60) {
            toast.error("Enter your Valid Height")
        }
        else {
            const response = await resisterfunction(inputdata);
            if (response.status === 200) {
                setInputdat({
                    ...inputdata, name: "",
                    email: "",
                    password: "",
                    age: "",
                    bw: "",
                    height: ""
                })
                toast.success('Resistration Succesfull')
                setTimeout(() => {
                    navigate("/")
                }, 3000)

            } else {
                toast.error(response.response.data.error);
            }
        }
    }


    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p>We are glad that you will be using THE FITNESS ZONE !</p>
                    </div>
                    <form action="">
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" name='name' id="" onChange={handelChange} placeholder='enter your Name ' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id="" onChange={handelChange} placeholder='enter your email addresss' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={passshow ? "password" : 'text'} name='password' id="" onChange={handelChange} placeholder='enter your Password' />
                                <div className="showpass" onClick={() => { setPassshow(!passshow) }} >
                                    {passshow ? "Show" : 'Hide'}
                                </div>
                            </div>
                            <div className="form_input">
                                <label htmlFor="age">Age</label>
                                <input type="number" name='age' id="" onChange={handelChange} placeholder='enter your Age' />
                            </div>
                            <div className="form_input">
                                <label htmlFor="bw">Body Weight</label>
                                <input type="number" name='bw' id="" onChange={handelChange} placeholder='enter your Weight' />
                            </div>
                            <div className="form_input">
                                <label htmlFor="height">Height</label>
                                <input type="number" name='height' id="" onChange={handelChange} placeholder='enter your Height' />
                            </div>
                        </div>
                        <button className="btn" onClick={handelSubmit} >Sign Up</button>

                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Resister