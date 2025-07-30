import React, { useEffect, useState } from "react";
import { databases, storage } from "../../lib/appwrite";
import { Link } from "react-router-dom";
import useLogin from "../hook/useLogin";

const MyBlogs = () => {
  const { user, isLoading, isLogin, navigate } = useLogin();
  const [blogData, setBlogData] = useState({});

  //   if (!isLoading && !isLogin) {
  //     navigate("/");
  //   }

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

  if (!user) return null;

  return (
    <div className="p-5">
        <h2 className="text-2xl font-bold">My blogs</h2>
      <div className="cards my-11 flex gap-9 flex-wrap justify-center w-full">
        {blogData.documents? (
          blogData.documents.map((item) => {
            if (user.$id === item.user_id) {
              return (
                <div
                  key={item.$id}
                  className="card bg-base-100  shadow-lg lg:w-1/4 w-full md:w-1/3 sm:w-1/2"
                >
                  <div className="card-body">
                    <h2 className="card-title">Title : {item.title}</h2>
                    <p>
                      <b>Description : </b>
                      {(() => {
                        const words = item.desc.split(" ");
                        return words.length > 30
                          ? words.slice(0, 30).join(" ") + "..."
                          : item.desc;
                      })()}{" "}
                      <Link
                        to={`/blog?id=${item.$id}`}
                        className="underline text-red-600 cursor-pointer"
                      >
                        read more
                      </Link>
                    </p>
                    <p className="posted-by">
                      Posted by : <b>{item.posted_by}</b>{" "}
                    </p>
                  </div>

                  <figure>
                    <img
                      src={storage.getFileView(
                        import.meta.env.VITE_Bucket_Id,
                        item.img_id
                      )}
                      alt="Shoes"
                    />
                  </figure>
                </div>
              );
              
            }
          })
        ) 
        : (
          <div>no blog available</div>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
