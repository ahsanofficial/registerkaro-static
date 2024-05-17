import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/cheque-bounce-notice/How do you issue a notic.svg";
interface HeroProps {
    cityName: string;
}
export const ChequeBounce = ({ cityName }: HeroProps) => {
  return (
    <div id="Document4">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>The payee may file a lawsuit against the drawer 15 days after the cheque expires and a bounce notice is sent. The payee is required by Section 138 of Negotiable Instrument Act to file a complaint. Cheque bounce is a criminal offense for which the payee may file a criminal lawsuit in accordance with Section 138 of the Act. After the 15-day period has passed since the cheque bounce notice was sent, the payee has 30 days to submit a complaint with the magistrate over the cheque bounce</p>
            <p>This tedious process of responding to the cheque bounce notice becomes easier when RegisterKaro becomes your process partner. RegisterKaro team of experts assists you in drafting the most apt notice with fewer gaps to obtain the best results.</p>
            
            
        </div>
        <div className="flex-4">
          <Image
            alt="what to do when you recieve a cheque Bounce Notice?"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
