import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/liquor-license/Validation_Revocation.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Liquor License in India is subject to validity which means that it is required to be renewed after a certain specific time period. Moreover, the License is also subject to revocation. These circumstances for either revocation or renewal can be observed below:</p>
        <div className="flex-4">
          <Image
            alt="Validation, Revocation & Renewal of Liquor License"
            className="Prerequisites-img w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Validity:</strong> In India, the normal validity time for a liquor license is one year from the date of issuance. During this time, the licensee is able to distribute and sell alcoholic beverages in accordance with the terms of the license.</p>
           <p><strong>Renewal:</strong> A liquor license can be renewed annually, allowing the licensee to keep the license active for an additional year. Within thirty days of the current license’s expiration date, license holders are required to file an application for renewal. The State Excise Department sets the renewal fee, which must be paid in order to complete the renewal process. Depending on the kind and class of license, the cost may change.</p>
           <p><strong>Revocation:</strong> If a license holder participates in certain forbidden actions, their liquor license may be revoked. Revocation can occur for a number of reasons, including supplying alcohol on dry days, serving alcohol to minors who are not of legal drinking age, breaking the regulations established by the relevant authority, etc.</p>
           
        </div>
       
      </div>
    </div>
  );
};
