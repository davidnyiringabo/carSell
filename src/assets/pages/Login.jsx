import google from "/gogle.svg"
import apple from "/apple.svg"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import {toast } from "react-toastify"
import {useNavigate} from "react-router-dom"
import Navbar from "./components/Navbar"
import { InputHTMLAttributes } from "react"

export default function Login() {

  const [formData,setFormData] = useState({
    car_make: "",
    car_model: "",
    year: null,
    mileage: null,
    condition: "",
    features: "",
    transmission: null,
    price_range: null,
    contact_number: null,
  })
  
  const [status,setStatus] = useState(500)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    console.log(formData)
     e.preventDefault()

    //  localStorage.setItem("carInfo", formData)
    //  toast.success("Data saved", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //  })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
   
    <div>
      <Navbar/>
      <div className="flex h-full justify-center items-center py-10   bg-slate-300 gap-9">

    <div className=" w-full flex h-full flex-col justify-center items-center">
              <h1 className="text-4xl md:text-4xl max-[500px]:text-6xl font-bold text-blue-900 pt-9">Welcome to Titan car rent</h1>

        <form className="flex flex-col h-full items-center max-[500px]:w-full md:w-4/5 min-[920px]:w-2/5 font-bold" method="post" onSubmit={handleSubmit}>
           
           <div className="flex flex-col px-4 w-full">
            <h5 className="text-2xl text-blue-800 font-bold my-2">Car make:</h5>
            <input type={"text"} placeholder={"Please enter car make"} value = {formData.car_make} onChange ={(event)=>handleChange(event)} required name="car_make" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-14 text-7xl rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
           </div>
           <div className="flex flex-col px-4 w-full">
            <h5 className="text-2xl text-blue-800 font-bold my-2">car model:</h5>
            <input type={"date"} placeholder={"Please enter car model"} value = {formData.car_model} onChange ={(event)=>handleChange(event)} required name="car_model" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
           </div>

           <div className="flex flex-col px-4 w-full">
           <h5 className="text-2xl text-blue-800 font-bold my-2">year:</h5>
           <input type={"number"} placeholder={"Please enter year of your car"} value = {formData.year} onChange ={(event)=>handleChange(event)} required name="year" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
          </div>

          <div className="flex flex-col px-4 w-full">
          <h5 className="text-2xl text-blue-800 font-bold my-2">mileage:</h5>
          <input type={"number"} placeholder={"Please enter your password"} value = {formData.mileage} onChange ={(event)=>handleChange(event)} required name="mileage" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
         </div>
         <div className="flex flex-col px-4 w-full">
         <h5 className="text-2xl text-blue-800 font-bold my-2">Features:</h5>
              <div class="">
              <input type="checkbox" value={"air Conditioning"}/> Air conditions
              </div>

              <div class="">
              <input type="checkbox" value={"Powering camos"}/> power and steering

              </div>
        </div> 
       <div className="flex flex-col px-4 w-full">
        <h5 className="text-2xl text-blue-800 font-bold my-2">Transmission:</h5>
        <select type={"number"} placeholder={"Please enter your password"} value = {formData.transmission} onChange ={(event)=>handleChange(event)} required name="tramissionns" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1">
            <option value="authomatike">Automatic</option>
            <option value="manual">Manual</option>
                    </select>
       </div>          <div className="flex flex-col px-4 w-full">
       <h5 className="text-2xl text-blue-800 font-bold my-2">Price:</h5>
       <input type={"range"} placeholder={"Please enter your password"} value = {formData.price_range} onChange ={(event)=>handleChange(event)} required name="price_range" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
      </div>

         <div className="flex flex-col px-4 w-full">
         <h5 className="text-2xl text-blue-800 font-bold my-2">Contact number:</h5>
         <input type={"text"} placeholder={"Please enter contact number"} value = {formData.contack_number} onChange ={(event)=>handleChange(event)} required name="contact_number" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
        </div>



           <button type="submit" className="border border-blue-800 hover:bg-blue-500 hover:border-none rounded-lg px-6 py-2 text-2xl font-bold my-4">save</button>


        </form>

    </div>
        
    </div>
    </div>
    
  )
}