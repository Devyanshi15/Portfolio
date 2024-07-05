import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer">

      <div className="f-top">

        <div className="f-top-left">
          <img className="logo" src={assets.dev_logo}></img>
          <p>A final year Engineering Student from VIT, Vellore.</p>
        </div>

        <div className="f-top-right">
          <div className="f-email">
            <img src={user_icon}></img>
            <input  type="email" placeholder="enter your email"></input>
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
      <p className="f-bottom-left">&copy; 2024 Devyanshi Mishra. All rights reserved</p>
      <div className="f-bottom-right">
        <p>Term of Services</p>
        <p>Privacy policy</p>
        <p>Connect with me</p>
      </div>

      </div>
    </div>
  );
};

export default Footer;
