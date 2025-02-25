import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/signup";
import Post from "./pages/posts";
import Authenticate from "./layouts/Authenticate";
import BasicLayout from "./layouts/BasicLayout"
import Profile from "./pages/profile"
const App = () => {
  return (
    <Routes>
      <Route element={<Authenticate />}>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/profile" element={<Profile/>}/>
      </Route>
      
      <Route element={<BasicLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
