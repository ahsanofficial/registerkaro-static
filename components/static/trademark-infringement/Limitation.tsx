import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-infringement/onetwo.svg";
interface HeroProps {
    cityName: string;
}
export const Limitation = ({ cityName }: HeroProps) => {
  return (

    <div id="Limitation">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="the Limitation Period for Filling the Suit"
            className="Importance-img-h-100 w-100"
            height={150}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>As per the Limitation Act, 1963 the period of limitation means the prescribed period as provided in the Act, within which any suit, appeal, or application shall be instituted. The prescribed period is three years from the date of the alleged offence. However, in case of a continuing offence, a new limitation period starts after every subsequent infringement.</p>
          
            

        </div>
      
      </div>
    </div>
  );
};
