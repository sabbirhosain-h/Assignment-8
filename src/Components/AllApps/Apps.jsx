import React from "react";
import { Link, useLoaderData } from "react-router";
import { IoIosSearch } from "react-icons/io";


const Apps = () => {

    const allAppData = useLoaderData()
    const [{id}] = allAppData;
    
   
    return (
        <div className="bg-[#D2D2D2]">
            <div className="text-center py-10 px-4">
                <h1 className="text-[32px] md:text-[48px] font-700 mt-10">Our All Applications</h1>
                <p className="mt-4 text-[20px] text-[#627382] font-400 ">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex justify-between mt-5 mx-auto max-w-[1200px] px-4 pb-10">
                <h1 className="text-[24px]  font-600" >(132) Apps Found</h1>

<label className="input bg-[#D2D2D2]">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input  type="search" className=" " placeholder="Search Apps" />
</label>
               
            </div>

           
            <div className="bg-[#D2D2D2] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-10 pb-10">

               {allAppData.map(app => (
                    <Link key={app.id} to={`/SingleApp/${app.id}`}>
                        <div className="bg-white mx-auto rounded-[8px] w-full max-w-[280px] shadow-sm p-3 hover:shadow-lg hover:scale-105 duration-300">
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
                    ))}
           </div>
            
        </div>
    );
};
export default Apps;