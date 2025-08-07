import React, { useEffect, useState } from 'react'
import useLogin from '../hook/useLogin'
import { useSearchParams } from 'react-router-dom'
import { databases, ID, storage } from '../../lib/appwrite'

const EditBlog = () => {
  console.log('hello')
   const {isLoading,isLogin,navigate,user} =useLogin()
   const [searchParam] =useSearchParams()
   const editId = searchParam.get('edit-id')
   const [title,setTitle] =useState('')
   const [desc,setDesc] =useState('')
   const [img_id,setImg_id] =useState('')
   const [file,setFile] =useState('')
   const [preview,setPreview]= useState('')
   useEffect(()=>{
    if(editId){
      databases.getDocument(
                  import.meta.env.VITE_Database_Id,
                  import.meta.env.VITE_Collection_Id,
                  editId,
              ).then((data)=> {
               setTitle(data.title)
               setDesc(data.desc)
               setImg_id(data.img_id)
              })
    }
   },[editId])
   

  const handleImgChange =(e)=>{
      const selectedFile =e.target.files[0]
        setFile(selectedFile)
        if(selectedFile){
          const previewUrl =URL.createObjectURL(selectedFile)
          setPreview(previewUrl)
        }
  }
  const editBlog =async(e)=>{
    e.preventDefault()
    let editImgId =img_id;
    if(file){

      const imgRes = await storage.createFile(
         import.meta.env.VITE_Bucket_Id,
         ID.unique(),
         file,
      )
      editImgId =imgRes.$id
    
    await databases.updateDocument(
      import.meta.env.VITE_Database_Id,
      import.meta.env.VITE_Collection_Id,
      editId,
      {
         
        title:title,
        desc:desc,
        img_id:editImgId,
        user_id:user.$id,
        posted_by:user.name

      }
    )
   await storage.deleteFile(
     import.meta.env.VITE_Bucket_Id,
      img_id
    )
    alert ('updated data successfully')
    navigate(`/blog?id=${editId}`)
  }
  }
      if(isLoading || isLoading ==true) return <div className="text-xl m-5">Loading...</div>

  return (
      <div className="">
      {user &&(
        <div className="w-full h-screen p-5 ">
          <form action="" className='md:w-1/2 flex flex-col gap-3' onSubmit={editBlog}>
            <label htmlFor="">
              Title
            </label>
            <input type="text" name="" id="" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)} className='px-2 border-1 rounded-xl py-1' required/>
            <label htmlFor="">
              Description
            </label>
            <textarea name="" id="" rows={4} placeholder='Enter description' value={desc} onChange={(e)=>setDesc(e.target.value)} className='px-2 border-1 rounded-xl py-1'required></textarea>
            <div className="img">
            {preview ? (<img src={preview} width={100} alt="" />):(<img src={storage.getFileView(import.meta.env.VITE_Bucket_Id,img_id)} width={100} />)}
            <input type="file" className='border-1 px-2 cursor-pointer mt-3' onChange={handleImgChange} />
            </div>
            <button type='submit' className='w-2/4 bg-[#6a8ca3] py-2 mt-3 rounded-2xl text-white cursor-pointer hover:bg-sky-950'>Update blog</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditBlog