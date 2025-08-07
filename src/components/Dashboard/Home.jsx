import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { databases, storage } from "../../lib/appwrite";
import useLogin from "../hook/useLogin";  
const Home = () => {
  const {isLoading} =useLogin()
  const [blogData, setBlogData] = useState({});
  
  useEffect(() => {
      databases
        .listDocuments(
          import.meta.env.VITE_Database_Id,
          import.meta.env.VITE_Collection_Id
        )
        .then((data) => {
          setBlogData(data);
       });
      }, [blogData]);
   

  if(isLoading || isLoading ==true) return <div className="text-xl m-5">Loading...</div>
  return (
    <div className="w-full px-3">
      <div className="flex md:flex-row flex-col px-11 items-center bg-[url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-[40vh] bg-cover bg-center">
        <div className="text text-white md:w-1/2 h-[70%] flex flex-col justify-center">
          <h2 className="md:text-6xl text-[40px]">Start Writing Today.</h2>
          <p className="md:mt-8 mt-5 text-[15px]">
            Join a growing community of writers. Create, edit, and share your
            blogs effortlessly — all in one place.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex md:justify-center mt-3 md:mt-0">
          <button className=" bg-base-100 rounded-4xl px-11 py-3 cursor-pointer hover:bg-gray-100">
            <Link to="/add-blog"> Create Blog</Link>
          </button>
        </div>
      </div>
      <div className="main pt-11 bg-gray-100">
        <div className="heading">
          <h2 className="text-4xl mt-11 text-center">Blogs</h2>
          <hr className="mt-9" />
        </div>

        <div className="cards py-11 flex gap-9 flex-wrap justify-center w-full ">
          {blogData.documents?.length ===0 &&(
            <div>No Blog Available !</div>
          )
          }
          {blogData.documents ? (
            blogData.documents.map((item) => {
              return (
               
                <div
                  key={item.$id}
                  className="card bg-base-100  shadow-lg lg:w-1/4 w-full md:w-1/3 sm:w-1/2"
                >
                  <div className="card-body flex gap-7">
                    <h2 className="card-title">Title : {(()=>{
                      const words =item.title.split(" ")
                      return words?.length > 10 ? words.slice(0,10).join(" ") +" . . . ":item.title
                    })()}</h2>
                  <figure>
                    <img
                      src={storage.getFileView(
                        import.meta.env.VITE_Bucket_Id,
                        item.img_id
                      )}
                      alt="Shoes"  height={200}
                    />
                  </figure>                  
                    <p><b>Description : </b>
                      {(() => {
                        const words = item.desc.split(" ");
                        return words?.length > 25
                          ? words.slice(0, 25).join(" ") + " . . ."
                          : item.desc;
                      })()} <Link to={`/blog?id=${item.$id}`} className="underline text-red-600 cursor-pointer">read more</Link>
                    </p>
                    <p className="posted-by">Posted by : <b>{item.posted_by}</b> </p>
                  </div>
                

                </div>
              );
            })
          ) : (
            <div>no blog available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
