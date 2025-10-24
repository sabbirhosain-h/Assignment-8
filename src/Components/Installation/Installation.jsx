import React, { useState } from "react";

const Installation = () => {
     const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value); // updates the state with new input value
  };

    return (
      <div className="bg-[#D2D2D2]">
            <div className="text-center py-10 px-4">
                <h1 className="text-[32px] md:text-[48px] font-700 mt-10">Your Installed Apps</h1>
                <p className="mt-4 text-[20px] text-[#627382] font-400 ">Explore All Trending Apps on the Market developed by us</p>
            </div>
            
           
        </div>
    );
};



export default Installation;
