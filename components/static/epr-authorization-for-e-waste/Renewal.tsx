import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/renewwal.svg";
interface HeroProps {
    cityName: string;
}
const Renewal = ({ cityName }: HeroProps) => {
  return (
    <div id="Renewal">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Renewal of EPR Authorisation"
            className="Renewal-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>The EPR authorisation received from the CPCB is valid for five years. An application for Renewal of EPR Authorisation must be made within 60 days of the expiry of the authorisation. The renewal fee for EPR Authorisation is the same as the application fee for a new application. In case of renewal of EPR authorisation, the Member Secretary is the approving authority.The EPR authorisation received from the CPCB is valid for five years. An application for Renewal of EPR Authorisation must be made within 60 days of the expiry of the authorisation. The renewal fee for EPR Authorisation is the same as the application fee for a new application. In case of renewal of EPR authorisation, the Member Secretary is the approving authority.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Renewal;


