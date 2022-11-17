import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav>
            <a href="/">
                <p> home</p>
            </a>
            <a href ="/Login">
                <p> Login</p>
            </a>
            <a href="/create"> 
                <p>Create User</p>
            </a>
        </nav>
    ); 

}


export default Header; 