"use client"
import { signInWithEmailAndPassword } from 'firebase/auth'
import React,{useState} from 'react'
import { auth } from '../Firebase'

const Page = () => {
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

    const sign = () =>{
        window.location.href = '/signup';
    }

    const loginn = async () =>{
        if(email == '' || password == ''){
            alert("Please fill the required fields")
        }
        else{

        try {
            const result = await signInWithEmailAndPassword(auth,email,password);   //Sign in with the help of firebase/auth
            localStorage.setItem('user',JSON.stringify(result));
            window.location.href = '/';
            alert("Login Succesfully")

        } catch (error) {
            console.log(error)
            alert("Wrong Email or Password")
        }
    }

    }

  return (
    <div>
    <nav>
        <a href="/">Home</a>
        <a href="login">Login</a>
        <a href="/signup">Signup</a>
      </nav>
    
    <div className='loginp'>
        <div>
            <h1>Login</h1>
        </div>
        <div>
            <input className='inp' type="text" placeholder='Enter Email' value={email} onChange={(e) =>setEmail(e.target.value)} />
        </div>
        <div>
            <input className='inp' type="password" placeholder='Enter Password' value={password} onChange={(e) =>setpassword(e.target.value)} />
        </div>
        <div>
            <button className='btn1' onClick={loginn}>Login</button>
        </div>
        <div className='load'> 
        <h2>Don't have an account?<button className='btn2' onClick={sign}>Signup</button></h2>
        </div>
    </div>
    </div>
  )
}

export default Page