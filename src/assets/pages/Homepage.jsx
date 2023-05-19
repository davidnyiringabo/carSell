import React from "react"
import { Link } from "react-router-dom"

const Homepage = ()=>{
    return(
        <div className="w-full h-screen pt-8 bg-slate-900 flex content-center items-center">
            <div className="sidebar w-1/5 h-full mt-6 flex flex-col items-center content-center bg-slate-800">
                <Link to={"/homepage"}>Home</Link>
                <Link to={"/homepage/photos"}>photos</Link>
                <Link to={"/homepage/messages"}>Messages</Link>
                <Link to={"/homepage/settings"}>settings</Link>
                <Link to={"/homepage/profile"}>profile</Link>
            </div>
        </div>
    )
}
export default Homepage