import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/malaysia-company-registration/Prerequisites_for_company.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are certain mandatory prerequisites to be fulfilled for company registration in Malaysia:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Prerequisites for company registration in Malaysia"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
           <p><strong>Directors : </strong>There must be a minimum 1 director who must be a resident of Malaysia for registering a private limited company and for a public limited company, the requirement extends to minimum two resident directors.</p>
           <p><strong>Shareholders: </strong>In order to register your company, you must have at least one shareholder on the list of your details.</p>
           <p><strong>Company Secretary: </strong>Your company must have a Malaysian Company Secretary whose primary and only residence is in Malaysia.</p>
           <p><strong>Registered Office address: </strong>you must have an address for office which is required to be registered as well for further proceeding ahead with the registration process of your business</p>
        </div>
       
      </div>
    </div>
  );
};
