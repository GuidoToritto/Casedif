import React from "react";
import Img01 from "../images/01.webp";

export const Banner = () => {
  return (
    <div>
      <img
        src="https://www.samuelsgroup.net/hubfs/Images/Blog%20Images/5%20Types%20of%20Construction.jpg"
        className="Img01"
        alt=""
      />
      <div className="steelframe01">
        Construí tu casa en Steelframe sin arriesgar tu dinero
        <div className="steelframe02">
          <div>Modalidad llave en mano</div>
          <div className="btn">Quiero construir</div>
        </div>
      </div>
    </div>
  );
};
