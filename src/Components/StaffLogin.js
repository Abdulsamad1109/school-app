import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StaffLogin = () => {
  let [email, setEmail]= useState("")
  let [password, setPassword]= useState("")
  let navigate = useNavigate()

  const login = ()=>{
    let result =  JSON.parse(localStorage.getItem("staffLoginDetails"));

      let findUser = result.find(user=>user.email == email && user.password == password); 
      if(findUser){
         navigate ("/staffdashboard");
      }
      else{
        alert ("please input the correct details");
      }

    }

  return (
    <div className='flex flex-col items-center mt-12 justify-center space-y-8'>
      <div className='font-bold text-center text-lg sm:text-xl md:2xl'>Sign in to your account</div>
      <input className='border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2'
       value={email} onInput={(e)=>(setEmail(e.target.value))} placeholder='email' />
      <input className='border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2'
       value={password} onInput={(e)=>(setPassword(e.target.value))}  placeholder='password' />
      <button className='border w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-10 text-lg text-gray-100 bg-blue-950' onClick={login}>Log In</button>
    </div>
  )
}

export default StaffLogin
