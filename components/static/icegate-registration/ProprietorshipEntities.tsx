import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/icegate-registration/Prerequisites for Proprietorship.svg";

const ProprietorshipEntities = () => {
  return (
    <div id="ProprietorshipEntities">
      <Image
        alt="Civil Defamation"
        className="Importance-img-h-100 w-100"
        height={300}
        loading="lazy"
        src={bft}
      />
      <div className="flex w-80 m-auto">
        <div className="flex-7">
          <p>
            <strong>1. Name Matching: </strong>Ensure the proprietor's name
            matches the name on the self-attested copy of the Importer Exporter
            Code (IEC) uploaded during registration.
          </p>
          <p>
            <strong>2. Authorization Letter (If Name Not on IEC):</strong>If the
            applicant's name is not on the IEC, upload a self-attested scanned
            copy of the Authorization Letter from the proprietor authorizing the
            applicant to register on ICEGATE on behalf of the proprietor.
          </p>
        </div>
      </div>
      <p className="main-para pt-3">
        These guidelines ensure that the registration process for proprietorship
        entities on ICEGATE is conducted accurately and in compliance with the
        requirements.
      </p>
    </div>
  );
};

export default ProprietorshipEntities;
