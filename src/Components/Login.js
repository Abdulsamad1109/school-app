import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';

const Login = () => {
  let [loginmatricNum, setloginMatricNum]= useState("")
  let [loginPassword, setLoginPassword]= useState("")
  let navigate = useNavigate();


  const login = async()=>{
    let result = await axios.post("http://127.0.0.1:5000/studentLogin", {loginmatricNum, loginPassword})
    console.log(result.data);
    localStorage.setItem("myJwtToken", JSON.stringify(result.data))
    
      // if(result.data === "details are correct"){
      //       navigate ("/studentdashboard");
      // }
      // else{
      // alert ("incorrect details");
      // }
    
  }
  
  return (
    // <div className='flex flex-col items-center m-32 justify-center space-y-8'>
    //   <div className='font-bold'>Sign in to your account</div>
    //   <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' type='text' value={loginmatricNum} onInput={(e)=>(setloginMatricNum(e.target.value))} placeholder='  matric num' />
    //   <input className='border border-gray-400 outline-none w-72 rounded-lg h-8' type='password' value={loginPassword} onInput={(e)=>(setLoginPassword(e.target.value))}  placeholder='  password' />
    //   <button className='border-2 w-72 rounded-lg h-10 text-lg text-gray-100 bg-blue-950' onClick={login}>Log In</button>
    // </div>
  <div className="flex flex-col items-center justify-center mt-12 space-y-8">
    <div className="font-bold text-center text-lg sm:text-xl md:text-2xl">
      Sign in to your account
    </div>
    <input
      className="border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2"
      type="text"
      value={loginmatricNum}
      onInput={(e) => setloginMatricNum(e.target.value)}
      placeholder="Matric num"
    />
    <input
      className="border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2"
      type="password"
      value={loginPassword}
      onInput={(e) => setLoginPassword(e.target.value)}
      placeholder="Password"
    />
    <button
      className="border w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-10 text-lg text-gray-100 bg-blue-950"
      onClick={login}
    >
      Log In
    </button>
</div>

  )
}

export default Login
