import React, { useState } from 'react'
import { account } from '../../lib/appwrite'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../hook/useLogin'

const Login = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const navigate =useNavigate()
    const {isLoading} =useLogin()
    const login =async (e)=>{
        e.preventDefault()
        account.createEmailPasswordSession(email,password).then(()=>alert('login successful')).then(()=>navigate('/'))
    }
  if(isLoading || isLoading ==true) return <div className="text-xl m-5">Loading...</div>
  return (
 <div className="flex flex-col p-9">
      <h2 className="text-4xl">Login</h2>
      <form
        action=""
        className="flex flex-col justify-center md:w-1/2 gap-2 mt-9"
        onSubmit={login}
      >
        <label htmlFor="">email</label>
        <input
          type="email"
          name=""
          id=""
          placeholder="Example@email.com"
          className="border-1 px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          required
        />
        <button
          type="submit"
          className="bg-gray-500 text-white hover:bg-gray-400 py-1 mt-3 px-3 w-[200px]"
        >
          Login
        </button>
        <label htmlFor="" className="text-red-600">
          Don't have an account?
          <Link to="/register" className="underline cursor-pointer">
            Register
          </Link>
        </label>
      </form>
    </div>  )
}

export default Login