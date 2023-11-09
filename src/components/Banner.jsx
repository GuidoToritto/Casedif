import React, {useRef} from "react";
import Img01 from "../images/01.webp";


export const Banner = () => {
  const projectSectionRef = useRef()
  const scrollToProjectSection = ()=>{
    projectSectionRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <img
        src="https://www.samuelsgroup.net/hubfs/Images/Blog%20Images/5%20Types%20of%20Construction.jpg"
        className="Img01"
        alt=""
      />
      
    </div>
  );
};
