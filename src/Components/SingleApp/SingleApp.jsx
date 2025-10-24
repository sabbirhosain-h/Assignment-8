import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { addInDB } from "../../Pages/AddtoDb";
 import { ToastContainer, toast } from 'react-toastify';



const SingleApp = () => {
    const allData = useLoaderData();
    const { id } = useParams();
    const appId = parseInt(id);
    const appData = allData.find(app => app.id === appId);
    const {title,downloads,ratingAvg,reviews,description,size,image,companyName,ratings} = appData;
    const [installBtn, setInstallBtn] = useState(false);

    useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installed"));
    if (stored.includes(appId)) {
      setInstallBtn(true);
    }
  }, [appId]);



    const notify = () => toast("Installing....");


    const handleInstall = () => {
        setInstallBtn(true);
    };


    const forInstall = (appId) =>{
          addInDB(appId);
    };



    return (
        <div className="bg-[#D2D2D2] p-4 md:p-15">
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:pl-20 md:pr-20">

              <div className="flex justify-center md:block">
                <img className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px]" src={image} alt="" />
              </div>
              <div className="w-full md:w-[70%]">
                  <div>
                    <h1 className="font-700 text-[24px] sm:text-[28px] md:text-[32px]">{title}</h1>
                    <h1 className="font-700 text-[16px] sm:text-[18px] md:text-[20px] mt-2">Developed by <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">{companyName}</span></h1>
                  </div>
                  <div className="divider divider-[#D2D2D2] "></div>
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10">
                        <div className="text-center sm:text-left">
                            <img className="mx-auto sm:mx-0" src="https://i.ibb.co.com/2H28BQb/icon-downloads.png" alt="" />
                            <p className="text-[14px] sm:text-[16px] font-400 text-[#001931] mt-2">Download</p>
                            <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-800 text-[#001931]">{downloads}</h3>
                        </div>
                        <div className="text-center sm:text-left">
                            <img className="mx-auto sm:mx-0" src="https://i.ibb.co.com/ccsqpcFN/icon-ratings.png" alt="" />
                            <p className="text-[14px] sm:text-[16px] font-400 text-[#001931] mt-2">Ratings</p>
                            <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-800 text-[#001931]">{ratingAvg}</h3>
                        </div>
                        <div className="text-center sm:text-left">
                            <img className="mx-auto sm:mx-0" src="https://i.ibb.co.com/DfDL5DFZ/icon-review.png" alt="" />
                            <p className="text-[14px] sm:text-[16px] font-400 text-[#001931] mt-2">Reviews</p>
                            <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-800 text-[#001931]">{reviews}</h3>
                        </div>
                  </div>
                  <div>
                    <button
              onClick={() => { handleInstall(); forInstall(appId); notify(); }}
              disabled={installBtn}
              className={`mt-5 px-3 sm:px-4 py-2 rounded-lg font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-auto
                ${
                  installBtn ? "bg-[#00d390] cursor-not-allowed" : "bg-[#00d390] hover:bg-[#04704e]"}`}> {installBtn ? "Installed" : `Install Now (${size} MB)`}{" "}
            </button>
                  </div>
                  

               </div>

          </div>

             <div className="divider divider-[#D2D2D2] "></div>

          <div className="mt-5 flex justify-center overflow-x-auto px-4">    
               <BarChart data={ratings}  layout="vertical" width={Math.min(1200, window.innerWidth - 40)} height={500} >
                    <XAxis type="number" domain={[0, 12000]}  axisLine={{ stroke: "#D2D2D2" }} />
                    <YAxis dataKey="name" type="category" width={70} axisLine={{ stroke: "#D2D2D2" }} />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="count" fill="#FF8811" barSize={50} />
               </BarChart>
           
          </div>


           <div className="divider divider-[#D2D2D2] "></div>
          <div className="mt-5 px-4 md:px-20 pb-10">
            <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-600">Description</h1>
            <p className="text-[#627382FF] text-[16px] sm:text-[18px] md:text-[20px] font-400 mt-5">{description}</p>

          </div>
          
        </div>
    );
};

export default SingleApp;