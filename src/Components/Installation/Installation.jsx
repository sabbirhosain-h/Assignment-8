import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { storeApp } from "../../Pages/AddtoDb";
import { FaCaretDown } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {
    const installedData = useLoaderData()
    const [installed, setInstalled] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    const notifyy = () => toast("Uninstalling....");


    useEffect(() => {
        const getInstalledApp = storeApp();
        const InstalledApps = getInstalledApp.map(id => parseInt(id));

        const InstalledApp = installedData.filter(app => InstalledApps.includes(app.id));
        setInstalled(InstalledApp)
         setInstalled(InstalledApp);

    },[installedData])

    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...installed].sort((a, b) =>
        order === "low" ? a.size - b.size : b.size - a.size
      );
    setInstalled(sorted);
  };

  const handleUninstall = (id) => {
    const updated = installed.filter((app) => app.id !== id);
    setInstalled(updated);

    const stored = JSON.parse(localStorage.getItem("installed")) || [];
    const newStored = stored.filter((appId) => parseInt(appId) !== id);
    localStorage.setItem("installed", JSON.stringify(newStored));
  };


    return (
      <div className="bg-[#D2D2D2]">
            <div className="text-center py-10 px-4">
                <h1 className="text-[32px] md:text-[48px] font-700 mt-10">Your Installed Apps</h1>
                <p className="mt-4 text-[20px] text-[#627382] font-400 ">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="px-4 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h1 className="text-[#001931] text-[20px] sm:text-[22px] md:text-[24px] font-600">({installed.length}) app found</h1>

                <div className="dropdown">
                   <div tabIndex={0} role="button" className="btn m-1 text-[14px] sm:text-[16px]">Sort by size <FaCaretDown /></div>
                       <ul tabIndex="-1" className=" dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                          <li><button onClick={() => handleSort("low")}>Low to High</button></li>
                          <li><button onClick={() => handleSort("high")}>High to Low</button></li>
                      </ul>
                </div>


                
            </div>

                 {installed.length === 0 && (
            <h1 className="text-center py-20 text-gray-600 text-lg sm:text-xl font-medium px-4">
          No apps installed 
            </h1>
          )}
                

                {
                    installed.map(installed => 
                        <div key={installed.id} className="px-4 md:px-10 py-3">

                    <div className="p-3 sm:p-4 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-xl">
                            <div className="flex gap-3 sm:gap-5 w-full sm:w-auto">
                                <div className="flex-shrink-0">
                                    <img className="w-12 h-12 sm:w-15 sm:h-15 rounded-xl" src={installed.image} alt="" />
                                </div>
                                <div className="flex-grow">
                                    <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-500 text-[#001931]">{installed.title}</h1>
                                    <div className="flex flex-wrap gap-3 sm:gap-6 mt-2 sm:mt-3">
                                        <div className="rounded-[4px] flex items-center text-[14px] sm:text-[16px] font-500 text-[#00D390]">
                                            <img className="h-[14px] w-[14px] sm:h-[16px] sm:w-[16px] mr-1" src="assets_pic/icon-downloads.png" alt="" />
                                                <h1>{installed.downloads}</h1>
                                        </div>
                                        <div className="rounded-[4px] flex items-center text-[14px] sm:text-[16px] font-500 text-[#00D390]">
                                            <img className="h-[14px] w-[14px] sm:h-[16px] sm:w-[16px] mr-1" src="assets_pic/icon-ratings.png" alt="" />
                                                <h1>{installed.ratingAvg}</h1>
                                        </div>
                                        <h1 className="text-[14px] sm:text-[16px] font-400 text-[#627382FF]" >
                                            {installed.size} MB
                                        </h1>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-auto">
                                <button  onClick={() => {handleUninstall(installed.id); notifyy()}} className="btn bg-[#00D390] text-white w-full sm:w-auto text-[14px] sm:text-[16px]">Uninstall</button> 
                               
                            </div>
                    </div>

                </div>
                    )
                }
            
            <ToastContainer />
        </div>
    );
};



export default Installation;