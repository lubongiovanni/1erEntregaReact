import React from "react";
import { CartWidget } from "../CartWidget";

export const NavBar = ({tituloindex}) => {
    return (
        <>

        <li class="active"><a href="index.html">{tituloindex}</a></li>
        <li><a href="#">Quien Soy</a></li>
        <li><a href="arte.html">Arte</a></li>
        <li><a href="#">Contacto</a></li>

        < CartWidget />

        </>
    )
    
}
