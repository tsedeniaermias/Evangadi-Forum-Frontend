import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import classes from "./Footer.module.css";
import FooterLogo from "../../assets/Images/10002.png";

const Footer = () => {
  return (
    <section className={classes.footer_outer_wrapper}>
      <div className={classes.footer_outer_container}>
        <div className={classes.footer_logo}>
          <a href="/">
            <img src={FooterLogo} alt="Evangadi" />
          </a>
          <div className={classes.icons}>
            <a href="https://www.facebook.com/evangaditech" target="_blank">
              {" "}
              
              <FaFacebook/>
            </a>
            <a href="https://www.facebook.com/evangaditech" target="_blank">
              {/* <InstagramIcon /> */}
              <FaInstagram />
            </a>

            <a href="https://www.youtube.com/@EvangadiTech" target="_blank">
              <FaYoutube/>
            </a>
          </div>
        </div>

        <div className={classes.links}>
          <h5>Useful Links</h5>
          <ul className={classes.footer_links}>
            <li>Terms of Service</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className={classes.links}>
          <h5>Contact Info</h5>
          <ul className={classes.footer_links}>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
