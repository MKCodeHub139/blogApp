import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { account, databases, storage } from '../../lib/appwrite'
import useLogin from '../hook/useLogin'
import { Link } from 'react-router-dom'

const Blog = () => {
    const {user} =useLogin()
    const [searchParam] =useSearchParams()
    const id = searchParam.get('id')
    const [data,setData] =useState({})

    useEffect(()=>{
        databases.getDocument(
            import.meta.env.VITE_Database_Id,
            import.meta.env.VITE_Collection_Id,
            id,
        ).then((data)=> setData(data))
    },[])
    console.log(data)
  return (
    <div className='h-[100%] px-5 py-5'>
            {user && data.user_id ===user.$id &&(

                <div className="actions flex justify-end w-full gap-5 mb-4 text-white ">
                    <Link to={`/edit-blog?edit-id=${data.$id}`} className='px-7 py-1 rounded-md cursor-pointer bg-blue-600 hover:bg-blue-500'>edit</Link>
                    <Link className='px-7 py-1 rounded-md cursor-pointer bg-red-600 hover:bg-red-500'>delete</Link>
                </div>
            )}
        <div className="blog-card w-full flex rounded-xl overflow-hidden">
            <div className="img w-[50%] h-[70vh] ">
                
                <img src={data.img_id && storage.getFileView(import.meta.env.VITE_Bucket_Id , data.img_id)} className="w-[100%] h-[100%] object-center object-cover " alt="" />
            </div>
            <div className='body w-[50%] flex flex-col gap-9 bg-gray-200 p-5'>
                <div className="title text-3xl">
                    <h2>{data.title}</h2>
                </div>
                <div className="desc"><p>{data.desc}</p></div>
                <div className="posted by"><p>Posted By <b>{data.posted_by}</b></p></div>
            </div>
        </div>
    </div>
  )
}

export default Blog