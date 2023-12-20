"use client"
import React,{useState} from 'react'
import { auth,fireDB } from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'


const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

    const logi = () =>{
        window.location.href = '/login';
    }

    const signup = async() =>{
        if(email == '' || password == ''){
            alert("Please fill the required fields")
        }

        try {
            const users = await createUserWithEmailAndPassword(auth,email,password);   // creating user and storing at firebase
            const user = {
                email:email,
                password:password,
                uid:users.user.uid
            }
            const ref = collection(fireDB,"users")
            await addDoc(ref,user);             // adding user at fireDB
            setEmail("")
            setpassword("")
            alert("Signup Sucessfully")
            window.location.href = '/login';
        } catch (error) {
            console.log(error)
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
            <h1>Signup</h1>
        </div>
        <div>
            <input className='inp' type="text" placeholder='Enter Email' value={email} onChange={(e) =>setEmail(e.target.value)} />
        </div>
        <div>
            <input className='inp' type="password" placeholder='Enter Password' value={password} onChange={(e) =>setpassword(e.target.value)} />
        </div>
        <div>
            <button className='btn1' onClick={signup}>Signup</button>
        </div>
        <h2>Already Have an account? <button className='btn2' onClick={logi}>Login</button></h2>
    </div>
    </div>
  )
}

export default Signup