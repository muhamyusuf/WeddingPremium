import React from "react";
import { background,woman_image,man_image } from "../assets/export_image.js";
import {CardCouple} from "../components/export_component";

const Couple = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex flex-wrap flex-1 gap-2 items-center justify-center p-[1rem]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <CardCouple
        img={man_image} 
        name="Jamal Panarukan"
        desc="Merupakan Putra dari seorang ayah hebat yang berhasil menempuh jalan yang berliku hingga sampai dititik ini, sehingga berhasil membahagiakan kedua orang tua dan mendapatkan seorang wanita yang sangat dicintainya"
      />
      <CardCouple
        img={woman_image} 
        name="Safitri Risya R."
        desc={`Merupakan wanita cantik independen yang telah menemukan cinta sejatinya dengan pria sigma, dengan terlaksanannya pernikahan yang sakral, wanita yang satu ini berhasil untuk mewujudkan ${'"wedding dream"'} nya `}
      />
    </div>
  );
};

export default Couple;
