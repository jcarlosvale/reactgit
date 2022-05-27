import React from "react";
import {Routes, BrowserRouter, Route,  } from "react-router-dom";
import Home from "./Home";

import Repositories from "./Repositories";

export default function Routers() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/repositories" element={<Repositories/>} />
        </Routes>
        </BrowserRouter>
    );
}