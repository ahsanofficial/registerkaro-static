import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consent to establish/Procedure for Consent To Establish.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For Consent to Establish (CFE)[for GREEN Category Industries processed by District Industries Centers]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>Identity proof of the applicant (EPIC / Aadhaar / Driving License / PAN Card / Passport),</p>
            <p><strong>2 : </strong>Proof of Ownership / Legal occupancy (Rent agreement, Rent receipt, Parcha, Land deed, Lease documents, etc. as applicable).</p>
           <p><strong> Documents Required Consent to Establish (CFE):</strong><br/></p> 
            <p><strong>1 : </strong>Copy of Environmental Clearance (EC) for EC-attracting projects.</p>
            <p><strong>2 : </strong>Any land-related document (rent agreement, rent receipt, land deed porcha, lease document (as applicable)).</p>
            <p><strong>3 : </strong>Gross Capital Investment Certificate (Self-certified Undertaking).</p>
            <p><strong>4 : </strong>Self-certified Site plan/layout with Road map / Route map.</p>
        </div>
        <div className="flex-3">
          <Image
            alt=" GREEN Category Industries processed by District Industries Centers"
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
