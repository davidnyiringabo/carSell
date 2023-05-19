import React from "react";
import "../../css/main.css"
import photo from "/Ellipse8.png"
import bulb from "/Bulb1.png"
import bell from "/bell_21.png"
import stars from "/Group58.png"
import navigate from "/Group.png"
import Paths from "/Group93.png"
import Navbar from "./components/Navbar";



const Landing = ()=>{
    return(
      <div>
      <Navbar/>
      <div className="w-full h-screen bg-gray-900 p-6 flex justify-between gap-10 items-center">
      <div className="flex flex-col justify-between items-end gap-24 w-1/4 h-3/5 mt-10 rounded">
        <div className="w-4/5 h-4/5 bg-slate-400 flex flex-col gap-9 text-white rounded-lg p-3">
          <div className="flex gap-6 items-center font-bold">
           <img className="w-1/7 rounded-full" src={photo}/>
           <h6>John Ricky</h6>

          </div>

          <img src={stars} className=" w-3/5" style={{marginTop:'-9%'}}/>
          <h4 className="text-2xl font-bold">Lorem Ipsum is simply a dummy text</h4>
          <p className="text-xl">Lorem  Ipsum is simply a dummy text</p>
        </div>

        <div className="w-full flex">
           <img src={bell} className="self-end"/>
        </div>
      </div>

      <div className="w-3/6 mx-1 flex flex-col justify-evenly items-center self-end h-4/5">
           <h2 className="text-7xl text-center text-white font-bold">Advanced software, advanced research for <span className="text-blue-500">SIMPLE </span> life </h2>
           <h4 className="text-3xl text-center text-zinc-100">We harness the latest technologies to develop cutting-edge digital solutions for modern business requirements</h4>
           <div className="w-1/3 hover:w-2/5 h-12 flex justify-evenly border border-white-900 items-center bg-slate-400 rounded-lg">
               <h5 >Get a Quote</h5>
               <div className="w-1/3 justify-center h-4/5 items-center bg-slate-200 rounded-lg"><img src={navigate} className="w-1/3"/></div>
           </div>
      </div>

      <div className="w-2/5 flex flex-col gap-24 justify-center items-center">
           <img src={bulb} className="w-2/6"/>
           <img src={Paths} className=" w-2/3"/>
      </div>
   </div>
  </div>
        
    )
}

export default Landing