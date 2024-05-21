import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
      <div className="flex-4">
          <Image
            alt="Benifits of rubber board registration"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          
         
            <p><strong>1. </strong>Trust of banks in business-related loans</p>
            <p><strong>2. </strong>Builds trust of investors related to the business</p>
            <p><strong>3. </strong>Help from the government in doing research and development in rubber-related products</p>
            <p><strong>4. </strong>Promotion in export-related business</p>
            <p><strong>5. </strong>Increases credibility in  the market in the eyes of the consumer mainly international consumer</p>





        </div>
     
      </div>
    </div>
  );
};
