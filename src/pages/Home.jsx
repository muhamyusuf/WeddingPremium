import { useNavigate } from "react-router-dom";

import React from "react";
import { background } from "../assets/export_image";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="w-full h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white font-poppins"
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        <div className="text-center text-[50px] text-white flex-1 flex items-center flex-col justify-end">
          <h1 className="font-bold">Jamal & Safitri</h1>
          <p className="text-[25px]">est. 2010</p>
        </div>

        <div className="w-full h-[30vh] text-text_light font-bold flex justify-between items-center text-center flex-1">
          <div className="flex flex-1 flex-row items-center justify-center">
            <button onClick={() => navigate("/couple")} className="z-10 hover:text-lg transition duration-100 ease-in-out hover:text-golden">
              Couple
            </button>
          </div>

          <div className="flex flex-1 flex-row items-center justify-center">
            <button onClick={() => navigate("/event")} className="z-10 hover:text-lg transition duration-100 ease-in-out hover:text-golden">
              Event
            </button>
          </div>

          <div className="flex flex-1 flex-row items-center justify-center">
            <button onClick={() => navigate("/invitation")} className="z-10 hover:text-lg transition duration-100 ease-in-out hover:text-golden">
              Invitation
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
