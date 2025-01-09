import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik, validationSchema } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const StaffRegistration = () => {
  let navigate = useNavigate()

  const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required"),
    password: Yup.string().required("required").min(7, "min of password must be 7 characters")
  })


  const myHandleSubmit = async(values)=>{
    
    try {
    
      const response = await axios.post("http://127.0.0.1:5000/staff_details/staffRegForm", values);
      console.log(response.data);
    } catch (error) {
      console.log("registration failed", error)
    }
  }




  let {handleChange, values: {firstName, lastName, email, password},
    handleSubmit, errors} = useFormik({
    initialValues,
    onSubmit: myHandleSubmit,
    validationSchema
  });



  return (
    <div className='flex flex-col items-center mt-12 justify-center space-y-8'>
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-md'>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <div className="font-bold text-center text-lg sm:text-xl md:text-2xl">
            Sign up a new staff account
          </div>
          <input name='firstName' onChange={handleChange} value={firstName} 
          className='border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2' placeholder='firstname'/>
          <small className='text-red-700 font-bold'>{errors.firstName}</small>

          <input name='lastName' onChange={handleChange} value={lastName} 
          className='border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2' placeholder='lastname'/>
          <small className='text-red-700 font-bold'>{errors.lastName}</small>

          <input name='email' type='email' onChange={handleChange} value={email} 
          className='border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2' placeholder='email'/>
          <small className='text-red-700 font-bold'>{errors.email}</small>

          <input name='password' type='text' onChange={handleChange} value={password} 
          className='border border-gray-400 outline-none w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-8 px-2' placeholder='password'/>
          <small className='text-red-700 font-bold'>{errors.password}</small>

          <input type='submit' value="Register staff" className='border w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg h-10 text-lg text-gray-100 bg-blue-950'/>
        </form>
      </div>
    </div>
  )
}

export default StaffRegistration
