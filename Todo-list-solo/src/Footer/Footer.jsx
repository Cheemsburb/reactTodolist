import React from "react";
import FooterStyle from './Footer.module.css'

import copy from '../assets/copy.svg'
import vert from '../assets/vertical-line.png'

const Footer = () => {
  return (
    <div className={FooterStyle.copyright}>
      <img
        src={copy}
        alt="copyright icon"
        className={FooterStyle["copyright-icon"]}
      />
      <p className={FooterStyle["footer-text"]}>OWNED BY GLADWYN SENCIL</p>
      <img
        src={vert}
        alt="vertical-line"
        className={FooterStyle["vertical-line-icon"]}
      />
      <p className={FooterStyle["footer-text"]}>ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
