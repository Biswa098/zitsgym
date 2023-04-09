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
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"
const Profile =  ({check,setCheck,email,setEmail}) => {
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
      {check ? (
        <>
          <GoogleOAuthProvider clientId="218551929953-jntp4dd0ttn32tp6k7giqp4gs84pbed0.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                const details = jwt_decode(credentialResponse.credential);
                console.log(details);
                setCheck(false);
                setEmail(details.email);
                await axios({
                  method: "POST",
                  url: "https://zitsgym.onrender.com/api/v2/users/login",
                  headers: {},
                  data: {
                    name: details.name,
                    email: details.email,
                    phone: "0",
                    age: "0",
                    bw: "0",
                    height: "0",
                    sex: "0",
                    pic: details.picture,
                  },
                })
                  .then((res) => {
                    console.log("res", res);
                  })
                  .catch((err) => {
                    console.log("error in request", err);
                  });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          <div>{pic.name}</div>
        </>
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={pic.pic}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pic.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email:{pic.email === "0" ? "not set" : pic.email} <br />
              Gender:{pic.sex === "0" ? "not set" : pic.sex} <br />
              age : {pic.age === "0" ? "not set" : pic.age}
              <br /> bw : {pic.bw === "0" ? "not set" : pic.bw}
              <br /> height : {pic.height === "0" ? "not set" : pic.height}
              <br /> phone : {pic.phone === "0" ? "not set" : pic.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/edit"><button className="btn">Edit</button></Link>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Profile;
