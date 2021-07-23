import * as React from "react";
import {Link} from "react-router-dom";


export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <div className={"switchLinks"}>
        <a><Link to={"/Inicio"}>Inicio</Link></a>
        <a><Link to={"/QuienesSomos "}>Quienes somos</Link></a>
        <a><Link to={"/Experiencias"}>Experiencias</Link></a>

        </div>
    </nav>
)

