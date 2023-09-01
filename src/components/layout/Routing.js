import { Route, Routes } from 'react-router-dom';
import  React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Detalis from "../pages/Detalis";
import ResultList from "../Elements/ResultList";

const Routing = () => {
    return <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/home"  element={<Home/>} />
        <Route exact path="/about"  element={<About/>} />ee
        <Route exact path="/Detalis"  element={<Detalis/>} />
        <Route exact path="/ResultList"  element={<ResultList/>} />
    </Routes>
}

export  default  Routing;
