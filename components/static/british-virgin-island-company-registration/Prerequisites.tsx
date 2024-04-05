import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/british-virgin-island-company-reg/Prerequisites_of_Company.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are certain prerequisites for the company registration in British Virgin Island:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 pt-5">
          <Image
            alt="Prerequisites of Company Registration in British Virgin Island"
            className="Prerequisites-img w-100"
            height={600}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
           <p><strong>Directors: </strong>The submitting company is required to have at least one director with no upper limit where either a corporate body or an individual may serve as the director. Any nationality may be possessed by the individual or the corporate organization. Moreover, one may also employ consulting firms to be nominated as a director of the company.</p>
           <p><strong>Shareholders: </strong>The submitting company is required to have one or more shareholders with no upper limit where the shareholder and a director of the company may be the same individual. Moreover, either a corporate entity or an individual can be designated as a shareholder.</p>
           <p><strong>Company Secretary: </strong>Each applicant for business registration needs to designate a business Secretary for the company where a corporate entity or an individual can both be considered a CS. Moreover, It is also possible for a firm's director or shareholder to serve as the company secretary. Otherwise, consulting services can also be hired to serve as the company secretary for any newly incorporated offshore business.</p>
           <p><strong>Paid-up Capital: </strong>The minimum paid-up capital requirement is one share of par value in any currency, domestic or international. The BVI Confederacy's Standard Authorized Shares consist of 500,000 shares with a minimum value of one US dollar each.</p>
           <p><strong>Office Address: </strong>Another prerequisite for the company registration in the British Virgin Island is the registered office address for your business must be within the Island only for a valid incorporation.</p>
        </div>
        
      </div>
    </div>
  );
};
