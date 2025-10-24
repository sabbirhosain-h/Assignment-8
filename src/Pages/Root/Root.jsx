import React from "react";
import Navber from "../../Components/Header/Navber";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Header/Footer/Footer";

const Root = () => {

    const navigation = useNavigation();

    return (
        <>
        <Navber /> {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-[#00D390]"></span>
        </div>
      ) : (
        <Outlet />
      )}
        
        <Footer />
        </>
    );
}

export default Root;
