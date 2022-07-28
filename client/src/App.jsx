import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //fetching func
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      }).then((response) => {
        if (response.status === 200) {
          return response.json();
          throw new Error("authentication failed");
        }
      }).then(resObject => {
        setUser(resObject.user);
      }).catch(error => {
        console.log(error);
      })
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"
            element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App;
