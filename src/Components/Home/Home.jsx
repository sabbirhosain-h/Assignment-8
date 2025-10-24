import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";


const Home = () => {

   const homeData = useLoaderData();
  const [{id}] = homeData
  


return(
    <div>
           <div className="bg-[#D2D2D2] py-10 text-center px-4 md:px-0">
                <h1 className="text-[40px] md:text-[72px] font-600">We Build <br /> <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text text-[40px] md:text-[72px] font-600">Productive</span> Apps</h1>
                <p className="text-[16px] md:text-[20px] font-400 text-[#627382] max-w-4xl mx-auto px-4">
                    At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className="py-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center px-4">
                   <a href="https://play.google.com/store/games?hl=en"> <button className="btn bg-white text-black border-[#e5e5e5] text-[16px] md:text-[20px] font-600 w-full md:w-auto max-w-xs">
                      <IoLogoGooglePlaystore />  Google Play
                     </button> </a>
                   <a href="https://www.apple.com/app-store/"> <button className="btn bg-white text-black border-[#e5e5e5] text-[16px] md:text-[20px] font-600 md:ml-4 w-full md:w-auto max-w-xs">
                       <FaAppStore />  App Store
                   </button> </a>
                </div>
                <div className="flex justify-around items-center px-4">
                <img className="mx-auto w-full max-w-md md:max-w-[600px]" src="assets_pic/hero.png" alt="" />
                </div>
                <div className="text-center bg-linear-to-r from-[#632ee3] to-[#9f62f2] md:py-10 py-5 px-4 -mx-4 md:mx-0">

                        <h1 className="text-white text-[28px] md:text-[48px] font-700 py-5">
                            Trusted by Millions, Built for You
                        </h1>
                        <div className="flex flex-col md:flex-row justify-between md:px-30 gap-6 md:gap-0 max-w-6xl mx-auto px-4">
                            <div>
                                <h1 className="text-[14px] md:text-[16px] font-400 text-white">Total Downloads</h1>
                                <h1 className="text-[48px] md:text-[66px] font-800 text-white">29.6M</h1>
                                <h1 className="text-[14px] md:text-[16px] font-400 text-white">21% more than last month</h1>
                            </div>
                            <div>
                                <h1 className="text-[14px] md:text-[16px] font-400 text-white">Total Reviews</h1>
                                <h1 className="text-[48px] md:text-[66px] font-800 text-white">906K</h1>
                                <h1 className="text-[14px] md:text-[16px] font-400 text-white">46% more than last month</h1>
                            </div>
                            <div>
                                <h1 className="text-[14px] md:text-[16px] font-400 text-white">Active Apps</h1>
                                <h1 className="text-[48px] md:text-[66px] font-800 text-white">132+</h1>
                                <h1 className="text-[14px] md:text-[16px] font-400 text-white">31 more will Launch</h1>
                            </div>
                        </div>
                </div>

               
            <div className="text-center mb-5 px-4">
                <h1 className="text-[32px] md:text-[48px] font-700 mt-10">Trending Apps</h1>
                <p className="text-[16px] font-400 text-[#627382]">Explore All Trending <br />Apps on the Market developed by us</p>
            </div>

            </div>

              <Link to={`/SingleApp/${id}`} >
              <div className="bg-[#D2D2D2] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-10 pb-10">
                              
                {
                    homeData.map(app => (
                       <Link key={app.id} to={`/SingleApp/${app.id}`}>
                         <div key={app.id} className="bg-white mx-auto rounded-[8px] w-full max-w-[280px] shadow-sm p-3 hover:shadow-lg hover:scale-105 duration-300">
                        <figure>
                             <img className="rounded-[8px] w-full" src={app.image}  alt="" />
                         </figure>
                         <h1 className="text-[20px] font-500 mt-2">{app.title}</h1>
                      <div className="flex justify-between items-center mt-2">
                            <div className="rounded-[4px] bg-[#F1F5E8] w-[55px] flex items-center text-[16px] font-500 text-[#00D390]"><img className="h-[16px] w-[16px] ml-1 mr-1" src="assets_pic/icon-downloads.png" alt="" />{app.downloads}</div>

                            <div className="rounded-[4px] bg-[#FFF0E1] w-[40px] flex items-center text-[16px] font-500 text-[#FF8811]"><img className="h-[16px] w-[16px] ml-1 mr-1" src="assets_pic/icon-ratings.png" alt="" />{app.ratingAvg}</div>
                     </div>
                        </div>
                       </Link>
                    ))
                }


                </div>
              </Link>

                <div className="bg-[#D2D2D2] flex justify-around items-center py-10">
                   <Link to='/Apps'> <button className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white text-[16px] md:text-[20px] font-600 w-full md:w-auto max-w-xs rounded-[4px]">
                      Show All
                     </button> </Link>
                </div>
             </div>
);
    
}
export default Home;