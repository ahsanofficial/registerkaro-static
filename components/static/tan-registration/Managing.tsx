import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Managing = () => {
  return (
    <div id="managing">
      <p className="main-para" style={{ textAlign: "left" }}>Any person or organization charged with the duty of deducting or collecting tax at source must apply for a TAN (Tax Deduction and Collection Account Number), in accordance with Section 203A of the Income-tax Act, 1961. Additionally, this section requires the TAN Number to appear in several papers. </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>The following documents should make clear the TAN:</p>
          
            <p><strong>1. </strong>Statements and returns pertaining to TDS (Tax Deducted at Source) or TCS (Tax Collected at Source):</p>
            <p><strong>2. </strong>Challans concerning payments made to TDS or TCS.</p>         
            <p><strong>3. </strong>The certification of TDS or TCS being issued or presented.</p>         
            <p><strong>4. </strong>Various paperwork and forms related to income tax filing and procedures.</p>         

        </div>
        <div className="flex-4">
          <Image
            alt="importance of Obtaining a TAN Number"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};