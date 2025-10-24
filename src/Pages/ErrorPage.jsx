import React from 'react';
import Navber from '../Components/Header/Navber';
import Footer from '../Components/Header/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <><Navber></Navber>
        <div className='bg-[#D2D2D2]'>

            <div className='p-10 flex justify-around items-center'>
                <img src="https://i.ibb.co.com/GQBdJqcg/error-404.png" alt="" />
            </div>
            <div className='text-center '>
                <h1 className='text-[60px] font-700'>Oops, page not found!</h1>
                <h1 className='text-[20px] font-400 text-[#627382] mt-2'>The page you are looking for is not available.</h1>
            </div>
            <div className='flex justify-around items-center py-4' > 
                <Link to='/'> <button className="btn  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white ">Go Back!</button></Link>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default ErrorPage;
