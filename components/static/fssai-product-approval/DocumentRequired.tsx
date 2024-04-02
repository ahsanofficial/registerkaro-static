import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following are the documents required for the company registration in United Kingdom:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-4 pt-5">
           <ol>
            <li>An FSSAI license for the food product</li>
            <li>Demand draft, which needs to be payable to the senior Accounts officer of the FSSAI.</li>
            <li>Agreement of relation between the FBO.</li>
            <li>The information on the manufacturing process of the food product.</li>
            <li>The test report was obtainined from the national accreditation board for testing and calibration laboratories or international laboratory Accreditation cooperation.</li>
            <li>Details of any technology.</li>
            <li>The history of quality and duration of the food product or ingredients consumption.</li>
            <li>The regulatory status of the ingredients or food product worldwide.</li>
            <li>Business name</li>
            <li>Business address</li>
            <li>Brand name</li>
            <li>Method of manufacturing</li>
            <li>Claim, if any?</li>
            <li>Product’s shelf life;</li>
            <li>Pack size</li>
            <li>Serving details;</li>
            <li>Ingredients details;</li>
            <li>Email;</li>
            <li>Phone number</li>
            <li>Manufactures address</li>
            <li>Product origin</li>
            <li>Country of origin</li>
            <li>Existence in the market</li>
            <li>Common name.</li>
           </ol>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents required for Company registration"
              className="DocumentRequired-img w-100"
              height={550}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
