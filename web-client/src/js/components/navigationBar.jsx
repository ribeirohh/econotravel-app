import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () => (
    <nav>
        <Link to={"/Inicio"}>Inicio</Link>
        <Link to={"/Quienes Somos"}>Quienes somos</Link>
        <Link to={"/Experiencias"}>Experiencias</Link>

    </nav>
)

