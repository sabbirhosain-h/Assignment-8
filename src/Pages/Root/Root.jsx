import React from "react";
import Navber from "../../Components/Header/Navber";
import { Outlet } from "react-router";
import Footer from "../../Components/Header/Footer/Footer";

const Root = () => {
    return (
        <>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
}

export default Root;
