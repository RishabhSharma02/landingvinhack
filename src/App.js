import { Routes, Route } from "react-router-dom"
import React from "react";
import Center from "./Components/Center";
import Login from "./Components/Login";

import './index.css'



function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Center/>}></Route>
    <Route path="/login" element={<Login/>}></Route>

    </Routes>
    </>
  );
}

export default App;
