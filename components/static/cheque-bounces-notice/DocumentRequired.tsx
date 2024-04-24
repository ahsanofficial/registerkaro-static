import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
       
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Section 138 : </strong>According to Section 138 of the Negotiable Instruments Act, bouncing a cheque due to insufficient money is considered an offense and is subject to jail. It states that if someone writes a cheque on an account they own to pay someone else and the bank returns the cheque unpaid because there aren’t enough funds to cover the cheque, the person who wrote the cheque has committed an offense</p>
            <p><strong>section 144 : </strong> In accordance with Section 144 of the Negotiable Instruments Act, any individual in charge of the firm’s operations at the time the offense was committed is liable for any cheque that bounced. This includes cheque that the company issues. According to this provision, it is illegal for a company’s cheque drawer to bounce due to inadequate cash</p>
            
        </div>
        <div className="flex-3">
          <Image
            alt="Documents you would need"
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
