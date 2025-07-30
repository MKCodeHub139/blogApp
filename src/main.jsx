import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/register.jsx";
import Home from "./components/Dashboard/Home.jsx";
import AddBlog from "./components/Blog/AddBlog.jsx";
import Logout from "./components/auth/Logout.jsx";
import Blog from "./components/Blog/Blog.jsx";
import MyBlogs from "./components/Blog/MyBlogs.jsx";
import EditBlog from "./components/Blog/EditBlog.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<Home />} path="" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="/register" />
      <Route element={<Home />} path="/dashboard" />
      <Route element={<AddBlog />} path="/add-blog" />
      <Route element={<Blog />} path="/blog" />
      <Route element={<MyBlogs />} path="/my-blogs" />
      <Route element={<EditBlog />} path="/edit-blog" />
      <Route element={<Logout />} path="/logout" />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
