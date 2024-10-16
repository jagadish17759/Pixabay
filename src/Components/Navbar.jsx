import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="navOut">
            <div className="navbar">
                <p>Pixabay Images</p>
                <div className="navD">
                    <Link to = "/lgn"><button>Login</button></Link>
                    <Link to = "/rgstr"><button>Register</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}