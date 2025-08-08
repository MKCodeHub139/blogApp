import React, { useEffect, useState } from "react";
import useLogin from "../hook/useLogin";
import { databases, ID, storage } from "../../lib/appwrite";

const AddBlog = () => {
  const { isLoading, isLogin, navigate, user } = useLogin();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (!isLoading && !isLogin) {
      navigate("/login");
    }
  }, [isLoading, isLogin]);
  const handleImgChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    }
  };

  const addBlog = async (e) => {
    e.preventDefault();

    const imgRes = await storage.createFile(
      import.meta.env.VITE_Bucket_Id,
      ID.unique(),
      file
    );
    const img_id = imgRes.$id;
    console.log(img_id);
    await databases.createDocument(
      import.meta.env.VITE_Database_Id,
      import.meta.env.VITE_Collection_Id,
      ID.unique(),
      {
        title: title,
        desc: desc,
        img_id: img_id,
        user_id: user.$id,
        posted_by: user.name,
      }
    );
    setTitle('')
    setDesc('')
    setFile('')
    setPreview('')
    alert('Add blog successfully')
    navigate('/my-blogs')
  };
  if (isLoading || isLoading == true)
    return <div className="text-xl m-5">Loading...</div>;

  return (
    <div className="bg-gray-100">
      {user && (
        <div className="w-full h-screen p-5 ">
          <form
            action=""
            className="md:w-1/2 flex flex-col gap-3"
            onSubmit={addBlog}
          >
            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-2 border-1 rounded-xl py-1"
              required
            />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              rows={4}
              placeholder="Enter description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="px-2 border-1 rounded-xl py-1"
              required
            ></textarea>
            <div className="img">
              {preview && <img src={preview} width={100} alt="" />}
              <input
                type="file"
                className="border-1 px-2 cursor-pointer mt-3"
                onChange={handleImgChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-2/4 bg-[#6a8ca3] py-2 mt-3 rounded-2xl text-white cursor-pointer hover:bg-sky-950"
            >
              Add blog
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
