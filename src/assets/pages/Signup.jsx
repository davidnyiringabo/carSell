import google from "/gogle.svg"
import apple from "/apple.svg"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import {toast } from "react-toastify"
import {useNavigate} from "react-router-dom"
import Navbar from "./components/Navbar"

export default function Login() {

  const [formData,setFormData] = useState({
    username: '',
    email:'',
    password:''
  })
  const [status,setStatus] = useState(500)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
     e.preventDefault()
     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDEwMGQ3ZGZjOTE3ZDI4NjliM2Q0ODAiLCJleHAiOjE2Nzg5MDg5OTQwMDYsImlhdCI6MTY3ODgyMjU5NH0.h65A-xELfR_wNY4fUHodqE8jNF47IZiCltqCC742jmo'

     const options = {
      header: {
        'Authorization':`Bearer ${token}`,
        'Content-type':'application/json'
      }
     }
    axios.post('http://localhost:7100/v1/api/login',formData,options)
      .then((response)=>{
        console.log('posted',response)
        setStatus(response.status)

        if(response.status == 200){
          toast.success(response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

          setTimeout(()=>{
            navigate("/")
          },500)
        }
        else{
          toast.error('You are not authorised, please create account', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      })
      .catch(err=>{
        console.log('the data is not posted',err)
        toast.error("Invalid credentials. create new account", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      })
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
      <div className="flex justify-center items-center py-10  min-h-screen bg-slate-300 gap-9">

    <div className=" w-full flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-4xl max-[500px]:text-6xl font-bold text-blue-900 ">Signup and get started with Titan</h1>

        <form className="flex flex-col items-center max-[500px]:w-full md:w-4/5 min-[920px]:w-2/5 font-bold" method="post" onSubmit={handleSubmit}>
           <div className="flex flex-col px-4 w-full">
            <h5 className="text-2xl text-blue-800 font-bold my-2">Username:</h5>
            <input type={"text"} placeholder={"Enter your name"} value = {formData.username} onChange ={(event)=>handleChange(event)} required  name="username" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-none"/>
           </div>
           <div className="flex flex-col px-4 w-full">
            <h5 className="text-2xl text-blue-800 font-bold my-2">Email:</h5>
            <input type={"text"} placeholder={"Enter your email"} value = {formData.email} onChange ={(event)=>handleChange(event)} required name="email" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
           </div>
           <div className="flex flex-col px-4 w-full">
            <h5 className="text-2xl text-blue-800 font-bold my-2">Password:</h5>
            <input type={"text"} placeholder={"Enter your password"} value = {formData.password} onChange ={(event)=>handleChange(event)} required name="password" className="text-xl px-3 w-full text-blue-900 border border-blue-200 h-10 rounded-lg outline-blue-300 outline-offset-2 outline-1"/>
           </div>

           <button type="submit" className="border border-blue-800 hover:bg-blue-500 hover:border-none rounded-lg px-6 py-2 text-2xl font-bold my-4">Signup</button>

           <h3 className="flex justify-between items-center gap-3 font-semibold text-xl mt-2">
            <span><hr className="w-14 border border-blue-400"/></span>
            Or signup with
            <span> <hr className="w-14 border border-blue-400"/></span>
           </h3>

           <div className="w-full flex justify-center items-center my-4">
             <Link className="w-1/4" to="http://google.com/" target={"_blank"}><img src={google}/></Link>
             <Link className="w-1/4" to="https://www.apple.com/" target={"_blank"}><img src={apple}/></Link>

           
           </div>

           <h6 className="text-xl">Don't have an account? <Link to="/signup" className="text-red-500">Signup</Link> </h6>

        </form>

    </div>
        
    </div>
   </div>    
  )
}