import React, { useState } from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image3 from "../../assets/p-img.webp";
import image4 from "../../assets/avatar.png";
const Profile =  () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const navigate = useNavigate();
  const [data,setData] = useState({});
  const userValid = ()=>{
    let token = localStorage.getItem("userdbtoken");
    if(!token){
      navigate("/error")
    }
  };
  useEffect(() => {
    if (mobile) window.scrollTo({ top: 1200, left: 100, behavior: "smooth" });
    else window.scrollTo({ top: 750, left: 100, behavior: "smooth" });
         userValid();
         let profile = localStorage.getItem("profile");
         setData(JSON.parse(profile))
   }, []);
    const handellogout = () =>{
      localStorage.clear();
      navigate("/");
    }
    const handeledit = () =>{
      navigate("/edit");
    }
   return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"var(--orange)",color:"white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image3}
          alt="Photo"
        />
        <div style={{display:"flex",justifyContent:"center"}}>
        <img src={image4} alt="" style={{borderRadius:"50%",height:"5rem",width:"5rem",marginTop:"-3rem"}} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Email
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Age
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.age}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Height
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.height}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Body Weight
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.bw}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Maintenance Calories
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {10 * data.bw + 6.25 * data.height - 5 * data.age + 5}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"green",border:"solid 1px",fontWeight:"700"}} onClick={handeledit}>
          Edit
        </Button>
        <Button size="small" style={{color:"#e32d2d",border:"solid 1px",fontWeight:"700"}} onClick={handellogout} >
          Log Out
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Profile;
