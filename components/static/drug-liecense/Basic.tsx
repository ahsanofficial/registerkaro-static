import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Basic = () => {
  return (
    <div id="Basic">
        <p className="main-para">The relevant state authorities (Drugs Control Department) must issue a legitimate drug license to any individual, corporation, partnership firm, etc. The provisions for this has been made in Drugs and Cosmetic Act, 1940 and Rules 1945 applicable in India. The following are some fundamental pre-requisites:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-2">
            <p><strong>1 :</strong> Minimum space for the shop or office.</p>
            <p><strong>2 :</strong> Granted in a non-residential setting, such as a business space.</p>
            <p><strong>3 :</strong> Must adhere to the requirements of the licensing body.</p>
            <p><strong>4 :</strong> Refrigerator or air conditioner on the property.</p>
            <p><strong>5 :</strong> The Department of Drug Control-approved technical personnel profile needs to be on display at the business's location.</p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Benefits of USA Company Registration
            The United States is a global economic powerhouse that also serves as a center for innovation and entrepreneurship. A powerful consumer market, potential investors, and a favorable business environment can all be gained"
            className="Basic-img w-100"
            height={450}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
