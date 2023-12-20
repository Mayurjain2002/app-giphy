"use client"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './page.module.css'
import Home from './Home'
// import Login from './Login'
import Page from "./login/page";
import Signup from "./signup/page";

const page = () => {
 


  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Page />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default page