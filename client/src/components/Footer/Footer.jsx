import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Stack, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <a href="https://facebook.com/groups/604132998051464/" target="blank"><FacebookIcon style={{color:"white"}}/></a>
        <a href="https://twitter.com/THEFITNESSZONE7?t=A2wjP4HHYZIO38Y15oNUWA&s=09" target="blank"><TwitterIcon style={{color:"white"}} /></a>
        <a href="https://instagram.com/thefitnesszone13?igshid=ZDdkNTZiNTM=" target="blank"><InstagramIcon style={{color:"white"}}/></a>
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
        <Stack>
          <Typography
            ml="10px"
            sx={{ fontSize: { lg: "13px", xs: "10px" } }}
            pb="10px"
            textTransform="capitalize"
            alignItems="center"
          >
            <CopyrightIcon style={{ width: "1rem" }} />
            Disclaimer: The original source of nutrient and exercise details
            displayed in the website is from Rapid and iStock.
          </Typography>
        </Stack>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
};

export default Footer;
