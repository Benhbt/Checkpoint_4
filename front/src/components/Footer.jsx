import React from "react";
import Logo from "../assets/img/Hubert.png"

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>Made with ♥ and <b>React.js</b>. </span>
        </footer>
    )
}

export default Footer;