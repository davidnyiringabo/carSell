import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./assets/pages/Login"
import './index.css'
import Navbar from './assets/pages/components/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Homepage from './assets/pages/Homepage'
import  Signup  from './assets/pages/Signup'
import Landing from './assets/pages/Landing'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>

    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
/>
    
  </React.StrictMode>
)
