import { useState,useEffect } from "react";
import { account } from "../../lib/appwrite";
import { useNavigate } from "react-router-dom";

const useLogin =()=>{
    const navigate =useNavigate()
    const [isLoading,setIsLoading] =useState(true)
    const [isLogin,setIsLogin] =useState(false)
    const [user,setUser]=useState('')
    useEffect(()=>{
      const res=  account.get().then((user)=>{
            setUser(user)
            setIsLoading(false)
            setIsLogin(true)
        }).catch((error)=>{
            setIsLoading(false)
            setIsLogin(false)
        })
    },[])
    return {user,isLoading,isLogin,navigate}
}
export default useLogin