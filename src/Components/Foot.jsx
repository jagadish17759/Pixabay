import React from "react";
import { Link } from "react-router-dom";

function Foot (){
            return(
                <div id="ld">
                <Link to = "/pixa"><p style={{color : "purple", listStyle:"none"}}>© Pixabay 2024</p></Link>
                </div>
            )
}
export default Foot;