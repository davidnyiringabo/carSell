import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "/titan.jpg"
import "./layout.css"
import Imag from "/Ellipse8.png"

const LayoutPage = ({children})=>{
    return(
        <div className="main-container flex flex-col content-center items-center">
            <div className="dashboard-navbar flex w-full  content-left gap-x-96 px-9 m-3 items-center">
                <img src={Logo} className="w-12 h-full rounded-lg"/>
                <input placeholder="search something" className="w-1/6 h-full border-slate-600 bg-black focus:border-slate-200 rounded-lg px-3"/>
                <div className="side-butons w-1/6 flex items-center justify-evenly">
                    <NavLink to={"/homepage/notifications"} className="icon"><i class="bi bi-bell"></i></NavLink>
                    <img src={Imag} className="w-6"/>
                </div>
            </div>
            <div className="content-container h-full flex content-left">
                <div className="sidebar w-1/12  flex flex-col items-center content-left text-white content-center gap-9 pt-9 mt-16">
                    <NavLink to={"/homepage/home"} className="icon-link"><i class="bi bi-house"></i></NavLink>
                    <NavLink to={"/homepage/messages"} className="icon-link"><i class="bi bi-send-fill"></i></NavLink>
                    <NavLink to={"/homepage/photos"} className="icon-link"><i class="bi bi-image-alt"></i></NavLink>
                    <NavLink to={"/homepage/settings"} className="icon-link"><i class="bi bi-gear-fill"></i></NavLink>
                    <NavLink to={"/homepage/profile"} className="icon-link"> <i class="bi bi-person-circle"></i></NavLink>
                   
                </div>
                <div className="render-container w-full h-full border rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default LayoutPage