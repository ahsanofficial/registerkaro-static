import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Cancellation = () => {
  return (
    <div id="Cancellation">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="Cancellation-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            The BIS Certification for Power Banks is valid for two years from
            the date of issue. You need to renew your BIS CRS Registration
            before the expiry date by following the same procedure as the
            initial registration. You need to pay the renewal fee as per the BIS
            fee structure and submit the updated documents and test report. BIS
            will renew your BIS CRS Registration within 15 working days.
          </p>

          <p>
            You can cancel your BIS Certification for Power Banks by submitting
            a cancellation request on the BIS portal. You need to provide the
            reason for cancellation and surrender your BIS CRS Registration
            certificate and the BIS Standard Mark. BIS will cancel your BIS CRS
            Registration within 15 working days.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Cancellation;
