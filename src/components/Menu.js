import React from "react";
import styled from "styled-components";

const Menu = () => {
    return (
        <MENU>
            <img src={require("./images/logo.png")} alt="logo" className="logo" />
            <h3 className="text-h3">luxury m4</h3>
            <ul className="nav__bar">
                <a className="nav__item" href="/">home</a>
                <a className="nav__item" href="/">about us</a>
                <a className="nav__item" href="/">collection</a>
                <a className="nav__item" href="/">contact us</a>
                <a className="nav__item" href="/">top products</a>
                <a className="nav__item" href="/" >find us</a>
            </ul>
        </MENU>
    )
}

const MENU = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    :root {
    --font--site: 'Montserrat', sans-serif !important;
    --font--text: 'Open Sans', sans-serif !important;
    --color--site: #050547 !important;
    }

    background-color: rgb(255, 255, 255) !important;
    width: 100% !important;
    height: 150px !important;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.151) !important;

    .text-h3 {
        text-align: center !important;
        font-size: 28px !important;
        font-family: var(--font--site) !important;
        text-transform: capitalize !important;
        color: var(--color--site) !important;
    }

    .logo {
    width: 50px !important;
    position: relative !important;
    margin-left: 48% !important;
    top: 5px !important;
    }

    .nav__bar {
    display: grid !important;
    grid-template-columns: repeat(6, 150px) !important; 
    position: relative !important;
    margin-left: 28% !important;
    top: 20px !important;
    
    }

    .nav__item {
    font-size: 18px !important;
    list-style: none !important; 
    color: var(--color--site) !important;
    text-transform: capitalize !important;
    text-decoration: none !important;
    }

    .nav__item:hover {

    transform: scale(1.1) !important;
    transition: all 0.9s !important;
    margin-top: 10px ;
    }
`

export default Menu;