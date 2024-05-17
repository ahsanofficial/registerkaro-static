import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dir-3-ekyc/onetwo.svg";
interface HeroProps {
    cityName: string;
}
export const Duedate = ({ cityName }: HeroProps) => {
  return (
    <div id="duedate">
       
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7 pt-5">
            <p>Penalty charges for failure to file the DIR-3 e-KYC form within the stipulated time frame or extended due date, as mandated by the Ministry of Corporate Affairs (MCA) through the MCA 21 portal, result in the deactivation of the Director Identification Number (DIN) associated with the non-compliant director. Subsequently, the concerned director can remedy this situation by submitting the overdue e-Form DIR-3 KYC and remitting a late fee of INR 5,000.</p>
            
            
        </div>
        <div className="flex-3">
          <Image
            alt="Due date"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
