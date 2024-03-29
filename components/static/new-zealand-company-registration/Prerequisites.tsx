import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/new-zealand-company-registration/Prerequisites_of_Company_Registration.svg"

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are certain prerequisites for the company registration in New Zealand:</p>
        <div className=" pt-5">
          <Image
            alt="Prerequisites of Company Registration"
            className="Prerequisites-img w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-7">
           <p><strong>Directors: </strong>There must be one director at least to proceed with the company registration process in New Zealand. It is not important to have the director as a New Zealand Resident.</p>
           <p><strong>Shareholders:</strong> Similar to that of directors requirement, there must be at least one shareholder for the company registration and again the shareholder does not necessarily need to be a local resident.</p>
           <p><strong>Office address:</strong> One must also require to have a registered office address for the company registration process in New Zealand.</p>
        </div>
      
      </div>
    </div>
  );
};
