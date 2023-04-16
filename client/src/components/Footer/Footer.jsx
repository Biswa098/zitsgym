import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Stack, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
      <div className="logo-footer">
        <img src={Logo} alt="" />
        </div>
        <Stack>
        <Typography ml="10px" width='90%'  sx={{ fontSize: { lg: '10px', xs: '10px' } }} pb="10px" textTransform="capitalize" alignItems='center'>
        <CopyrightIcon style={{width:"1rem"}}/>Disclaimer: The original source of nutrient and exercise details displayed in the website is from Rapid and iStock.
    </Typography>
        </Stack>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
};

export default Footer;
