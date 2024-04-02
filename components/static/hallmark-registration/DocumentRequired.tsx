import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hallmark-registration/Documents.svg";
interface HeroProps {
    cityName: string;
}
const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <h3>Proof of a Company/ firm establishment</h3>
            <p><strong>1. </strong>Registered partnership deed</p>
            <p><strong>2. </strong>Registration certificate issued by ROC and MOA(Memorandum of Association)</p>
            <p><strong>3. </strong>CA certificate (if the application is a proprietorship firm)</p>
            <h3>Address proof of company or firm</h3>
            <p><strong>1. </strong>GST registration certificate</p>
            <p><strong>2. </strong>Income tax assessment order</p>
            <p><strong>3. </strong>The sale or lease deed agreement</p>
            <p><strong>4. </strong>Rent agreement with previous rent receipts</p>
            <p><strong>5. </strong>Latest receipt of property tax</p>
            <p><strong>6. </strong>Registration certificate issued by a state government</p>
            <h3>Proof of annual turnover:</h3>
            <p><strong>1. </strong>Copy of GST returns of the previous financial year</p>
            <p><strong>2. </strong>In case the firm is new, an undertaking should be collected from the firm with an estimate of expected turnover and assurance to submit GSTR.</p>
            <h3>ID proof of the Signatory:</h3>
            <p><strong>1. </strong>Aadhaar-based verification or e-signature</p>
            <p><strong>2. </strong>Copy of PAN card, Aadhaar card, passport, driving license or photo ID card issued by a Gazette Officer on an official letterhead</p>
        </div>
        <div className="flex-4">
        <Image
            alt="Documents Required for Hallmark Registration"
            className="DocumentRequired-img w-100"
            height={750}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentRequired;


