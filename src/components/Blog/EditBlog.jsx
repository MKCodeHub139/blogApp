import React, { useState } from 'react'
import useLogin from '../hook/useLogin'

const EditBlog = () => {
   const {isLoading,isLogin,navigate,user} =useLogin()
  const [title,setTitle] =useState('')
  const [desc,setDesc] =useState('')
  const [file,setFile] =useState('')
  const [preview,setPreview]= useState('')


  const handleImgChange =()=>{

  }
  const editBlog =()=>{
    
  }
  return (
      <div className="bg-gray-100">
      {user &&(
        <div className="w-full h-screen p-5 ">
          <form action="" className='w-1/2 flex flex-col gap-3' onSubmit={editBlog}>
            <label htmlFor="">
              Title
            </label>
            <input type="text" name="" id="" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)} className='px-2 border-1 rounded-xl py-1'/>
            <label htmlFor="">
              Description
            </label>
            <textarea name="" id="" rows={4} placeholder='Enter description' value={desc} onChange={(e)=>setDesc(e.target.value)} className='px-2 border-1 rounded-xl py-1'></textarea>
            <div className="img">
            {preview && <img src={preview} width={100} alt="" />}
            <label htmlFor="">Choose Image : </label>
            <input type="file" className='border-1 px-2 cursor-pointer' onChange={handleImgChange}/>
            </div>
            <button type='submit' className='w-2/4 bg-[#6a8ca3] py-2 mt-3 rounded-2xl text-white cursor-pointer hover:bg-sky-950'>Add blog</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditBlog