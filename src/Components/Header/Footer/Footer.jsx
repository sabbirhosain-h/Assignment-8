import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#001931] p-5 ">
            <div className="flex justify-around mt-5 md:mt-0">
                <div className="flex items-center gap-2 lg:max-w-[1300px] sm:mt-5 ml-5 mx-auto">
                    <img className="h-[40px] w-[40px]" src="assets_pic/logo.png" alt="" />
                    <h1 className="text-[20px] font-700 text-[#632ee3]">HERO.IO</h1>
                </div>
                <div className="text-white mr-8 sm:mt-5">
                    <h1 className="text-[20px] md:text-[30px]">Social Links</h1>
                    <div className="flex gap-4 ">
                        <FaInstagram />
                        <CiLinkedin />
                        <FaFacebookSquare />
                    </div>
                </div>
            </div>

            <div className="divider divider-primary "></div>

            <div className=" text-center">
                <h1 className="text-white text-[16px] font-500 mt-5">Copyright © 2025 - All right reserved</h1>
            </div>       
        </div>
    );       
}
export default Footer;      
