import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <div className="Importance-img w-100 flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong> Please read the instructions and guidelines carefully before filling out online application web forms.</p>

            
            <p><strong>2.  </strong>Please ensure that the applicant is registered as a business/registered user on the MCA portal before filing the web form.</p>
            
            <p><strong>3.  </strong>Please ensure that the applicant has a valid mobile number and email ID registered on the MCA portal against the DIN.</p>
            
            <p><strong>4.  </strong>Please ensure that the applicant has a valid DIN with the Status 'Approved' or ‘Disqualified’ or 'Deactivated' due to the non-filing of webform DIR-3 KYC.</p>
            
            <p><strong>5.  </strong>Please ensure that at least one e-form 'Form No.DIR-3-KYC' has been filed against the DIN.</p>
            
            <p><strong>6.  </strong>Please ensure that the DIN is an approved DIN against which webform 'DIR-3 KYC web’ is not in status</p>
            
            <p><strong>7.  </strong>‘Payment incomplete’ or ‘Under processing’ or ‘Approved’ during the current Financial Year.</p>
            <p> <strong>8.  </strong>Please ensure that in case the DIN status is deactivated, the filing shall be allowed only if the reason for. </p>
            <p><strong>9.  </strong>deactivation is ‘Non-filing of KYC in DIR-3 KYC’.</p>
            <p><strong>10.  </strong>Please ensure no webform DIR-6 should be pending approval against the DIN.</p>
            <p><strong>11.  </strong>Please ensure that the DIN entered in the web form was allotted on or before 31st March of the previous financial year.</p>
            <p><strong>12.  </strong>Please ensure that the applicant verifies the OTP entered for mobile number and email id.</p>
            <p><strong>13.  </strong>If the space within any of the fields is not sufficient to provide all the information, then additional details can be provided as an optional attachment to the web form.</p>
           <p><strong>14.  </strong>Please note no fees are applicable if application for KYC is filed before 30th September by DIN holder who has been allotted DIN on or before 31st March of every year, and whose DIN is in ‘Approved’ status. </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Importance check points while filling "
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
