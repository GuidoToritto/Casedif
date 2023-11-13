import React, {useRef} from "react";
import Img01 from "../images/PORTADA.jpg";


export const Banner = () => {
  const projectSectionRef = useRef()
  const scrollToProjectSection = ()=>{
    projectSectionRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <img
        src={Img01}
        className="Img01"
        alt=""
      />
      
    </div>
  );
};
