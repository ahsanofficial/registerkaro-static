import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-cancellation-and-revocation/Procedure for Revocation.svg";
interface HeroProps {
    cityName: string;
}
const ProcedureRevocation = ({ cityName }: HeroProps) => {
  return (
    <div id="ProcedureRevocation">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Procedure for Revocation"
            className="Importance-img-h-100 w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>A registered person can submit an application through the online portal for revocation of cancellation within 30 days from the date of receipt of the cancellation order. However, the revocation is subject to the satisfaction of the proper officer. If he is satisfied then he can revoke the cancellation by an order within 30 days from the date of receipt of the application. In case the proper officer isn't satisfied, then he can reject the application, however before rejecting, the opportunity of being heard is given by issuing a show-cause notice to which the applicant shall reply within 7 working days from the date of the receipt of the notice. Thereafter the proper officer after considering the reply can either accept or reject the application within 30 days from the date of receipt of reply from the applicant.
</p>
        </div>

      </div>
    </div>
  );
};

export default ProcedureRevocation;


