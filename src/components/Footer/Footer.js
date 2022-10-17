import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


const footerStyle = {
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <>
   
    <div>

      <div style={phantomStyle}  />
        
      <div style={footerStyle}>{children}
      <SocialIcon url="https://www.linkedin.com/in/ayushi-rastogi-54548821b/"  style={{marginRight:"9px"}}/>
      <SocialIcon url="https://github.com/ayushi-ras" style={{backgroundColor:"white", borderRadius:"20px"}}/>
        <p style={{fontSize:"15px"}}>Copyright @2022 Created by Ayushi Rastogi</p>
      </div>

    </div></>
  );
}

export default Footer;
