import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../lib/appwrite";
import useLogin from '../hook/useLogin'
const Home = () => {
    
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
           <Link to='/add-blog'> Create Blog</Link>
          </button>
        </div>
      </div>
      <div className="main mt-11">
        <div className="heading">
          <h2 className="text-4xl mt-11 text-center">Blogs</h2>
          <hr className="mt-9" />
        </div>
        <div className="cards my-11 flex gap-9 flex-wrap justify-center w-full">
          <div className="card card-side bg-base-100 shadow-sm w-full md:w-[40vw] lg:w-[30vw]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-sm w-full md:w-[40vw] lg:w-[30vw]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-sm w-full md:w-[40vw] lg:w-[30vw]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-sm w-full md:w-[40vw] lg:w-[30vw]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-sm w-full md:w-[40vw] lg:w-[30vw]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
