import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useState,useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"
const Profile =  ({check,setCheck,email,setEmail}) => {
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
  const [pic, setPic] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 800, left: 100, behavior: 'smooth' })
 
         const request = async () => {
          await axios
          .get(`https://zitsgym.onrender.com/api/v2/users/info/${email}`, {
            params: {
              //email: details.email,
            },
          })
          .then((res) => {
            setPic(res.data); 
          })
          .catch((err) => {
            console.log("error in request", err);
          });
        } 
       request();
  
   }, [check]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h3>Profile</h3>
    </div>
  );
};

export default Profile;
