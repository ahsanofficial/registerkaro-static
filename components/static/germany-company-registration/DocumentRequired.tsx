import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/germany-company-registration/Documents.svg"

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">To begin with the process of company registration in Germany, you must have the following documents:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>1: </strong>Application for Registration</p>
            <p><strong>2: </strong>Articles of Association</p>
            <p><strong>3: </strong>Memorandum of Association</p>
            <p><strong>4: </strong>Proof of share capital deposited in the company's bank account</p>
            <p><strong>5: </strong>Current bank accounts details</p>
            <p><strong>6: </strong>Electricity bills, utility Bills, etc</p>
            <p><strong>7: </strong>Directors' and Stockholders' Identity and residential Proof</p>
            <p><strong>8: </strong>Details and proof of the registered office address</p>
            <p><strong>9: </strong>Information about directors and stockholders</p>
            <p><strong>10: </strong>Documentation describing the management committee's membership.</p>
            <p><strong>11: </strong>Any additional important papers</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents required for Company registration"
              className="DocumentRequired-img w-100"
              height={800}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
