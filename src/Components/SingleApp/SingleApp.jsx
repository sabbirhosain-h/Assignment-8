import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";



const SingleApp = () => {
    const allData = useLoaderData();
    const { id } = useParams();
    const appId = parseInt(id);
    const appData = allData.find(app => app.id === appId);
    const {title,downloads,ratingAvg,reviews,description,size,image,companyName,ratings} = appData;

    const [installBtn, setInstallBtn] = useState(false);

    const handleInstall = () => {
        setInstallBtn(true);
    };

    return (
        <div className="bg-[#D2D2D2] md:p-15">
          
          <div className="flex gap-10 pl-20 pr-20">

              <div>
                <img className="h-[350px] w-[350px]" src={image} alt="" />
              </div>
              <div className="w-[70%]">
                  <div>
                    <h1 className="font-700 text-[32px]">{title}</h1>
                    <h1 className="font-700 text-[20px] mt-2">Developed by <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">{companyName}</span></h1>
                  </div>
                  <div className="divider divider-[#D2D2D2] "></div>
                  <div className="flex items-center gap-10">
                        <div>
                            <img src="https://i.ibb.co.com/2H28BQb/icon-downloads.png" alt="" />
                            <p className="text-[16px] font-400 text-[#001931] mt-2">Download</p>
                            <h3 className="text-[40px] font-800 text-[#001931]">{downloads}</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co.com/ccsqpcFN/icon-ratings.png" alt="" />
                            <p className="text-[16px] font-400 text-[#001931] mt-2">Ratings</p>
                            <h3 className="text-[40px] font-800 text-[#001931]">{ratingAvg}</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co.com/DfDL5DFZ/icon-review.png" alt="" />
                            <p className="text-[16px] font-400 text-[#001931] mt-2">Reviews</p>
                            <h3 className="text-[40px] font-800 text-[#001931]">{reviews}</h3>
                        </div>
                  </div>
                  <div>
                    <button onClick={handleInstall} disabled={installBtn} className={`mt-5 px-4 py-2 rounded-lg font-semibold text-white text-[20px] 
        ${installBtn ? "bg-[#00d390] cursor-not-allowed" : "bg-[#00d390] hover:bg-[#04704e]"}`}>
                       {installBtn ? "Installed" : `Install Now (${size} MB)`}
                    </button>
                  </div>
                  

               </div>

          </div>

             <div className="divider divider-[#D2D2D2] "></div>

          <div className="mt-5">    
               <BarChart data={ratings}  layout="vertical" width={1200} height={500} >
                    <XAxis type="number" domain={[0, 12000]}  axisLine={{ stroke: "#D2D2D2" }} />
                    <YAxis dataKey="name" type="category" width={70} axisLine={{ stroke: "#D2D2D2" }} />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="count" fill="#FF8811" barSize={50} />
               </BarChart>
           
          </div>


           <div className="divider divider-[#D2D2D2] "></div>
          <div className="mt-5-">
            <h1 className="text-[24px] font-600">Description</h1>
            <p className="text-[#627382FF] text-[20px] font-400 mt-5">{description}</p>

          </div>
          
        </div>
    );
};

export default SingleApp;
