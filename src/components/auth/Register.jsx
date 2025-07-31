import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { account, ID } from '../../lib/appwrite'
import useLogin from '../hook/useLogin'


const Register = () => {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const {isLoading} =useLogin()
    const register =async(e)=>{
        e.preventDefault()
        try {
            
            await account.create(ID.unique(),email,password,name)
            alert('account created successfully')
        } catch (error) {
            console.log(error)
        }
    }
    if(isLoading || isLoading ==true) return <div className="text-xl m-5">Loading...</div>
  return (
     <div className="flex flex-col p-9">
      <h2 className="text-4xl">Register</h2>
      <form
        action=""
        className="flex flex-col justify-center md:w-1/2 gap-2 mt-9"
        onSubmit={register}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="border-1 px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">email</label>
        <input
          type="email"
          name=""
          id=""
          placeholder="Example@email.com"
          className="border-1 px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">password</label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="border-1 px-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-500 text-white hover:bg-gray-400 py-1 mt-3 px-3 w-[200px]"
        >
          Register
        </button>
        <label htmlFor="" className="text-red-600">
          Already have an account?
          <Link to="/login" className="underline cursor-pointer">
            Login
          </Link>
        </label>
      </form>
    </div>
  )
}

export default Register