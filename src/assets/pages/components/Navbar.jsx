import React from "react";
import "../../../css/main.css"
import titan from "/titan.jpg"
import {Link} from "react-router-dom"


const Navbar = ()=>{

    return(
        <div className="w-full bg-slate-700 flex justify-between h-12 px-12 items-center text-white text-2xl fixed">

        <div className="flex items-center gap-2 font-bold">
            <img src={titan} className="w-7 rounded" style={{opacity:'0.9'}}/>

            <a href="/">Titan corporation</a>
        </div>
            
            <div className="mr-2 flex w-1/5 gap-10 font-bold">
            <Link  to="/login">Login</Link>
            <Link  to="/signup">Signup</Link>
            </div>
            

        </div>
    )
}
export default Navbar