import * as React from "react";
import {Link} from "react-router-dom";
import logo from "./assets/logo.png";

export const NavigationBar = () => (
    <nav className={"navigationBar"}>
         <div className={"logoImg"}>
             <img className={"logo"} src={logo} />
         </div>
        <div className={"switchLinks"}>
        <a><Link to={"/inicio"}>Inicio</Link></a>
        <a><Link to={"/quienes-somos"}>Quienes somos</Link></a>
        <a><Link to={"/experiencias"}>Experiencias</Link></a>

        </div>
    </nav>
)

