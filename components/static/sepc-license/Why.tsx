import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/sepc-license/Documents Required.svg";

export const Why = () => {
  return (
    <div id="Why">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
      <div className="flex-3">
          <Image
            alt="Documents Required"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={dft}
          />
        </div>

        <div className="flex-6 pt-2 ps-5  ">
            <p className="ps-5"> <strong>1. </strong> Digital Signature Certificate.</p>
            <p className="ps-5"> <strong>2. </strong>Memorandum of Association & Articles of Association in the case of a company.</p>
            <p className="ps-5"> <strong>3. </strong>Two photographs of the authorised signatory.</p>
            <p className="ps-5"><strong>4. </strong>Certificate of Incorporation of the company.</p>
            <p className="ps-5"> <strong>5. </strong>Cancelled cheque by the authorised signatory.</p>
            <p className="ps-5"> <strong>6. </strong>Certificate of business registration in the case of a proprietorship or partnership firm.</p>
            <p className="ps-5"><strong>7. </strong>Self-attested address proof (like for example Aadhar Card/Voter ID) of the authorised person.</p>
            <p className="ps-5"><strong>8. </strong> Proof of Rent Agreement.</p>
            <p className="ps-5"> <strong>9. </strong>Copy of GST Registration.</p>
            <p className="ps-5"> <strong>10. </strong>Ownership proof of the registered office duly notarised on Rs. 10 stamp paper or No Objection Certificate from the owner of the property.</p>
        </div>
        
      </div>
    </div>
  );
};
