import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/british-virgin-island-company-reg/Documents.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">In order to process for the company registration in British Virgin Island, then you must have the following documents to avoid the rejection of your application [list is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7 pt-5">
            <p><strong>1: </strong>Completed Application Form [the form must have the details such as company name, directors, shareholders]</p>
            <p><strong>2: </strong>Shareholders details [origin, residential address, nationality, occupation, and supporting evidences]</p>
            <p><strong>3: </strong>Directors details [origin, residential address, nationality, occupation, and supporting evidences]</p>
            <p><strong>4: </strong>The passports of the soon-to-be-appointed directors and stockholders, both scanned and notarized</p>
            <p><strong>5: </strong>An official document that has been notarized and photocopied, such as a driver's license or photo ID card, guarantees the examiner that the copies and images are accurate in terms of likeness.</p>
            <p><strong>6: </strong>Evidence of residency such as any documentation with the name and address of the individual [Any utility bill or bank statement will suffice as proof that cannot be older than three months]</p>
            <p><strong>7: </strong>First introduction letter written by a qualified accountant or reputable attorney. </p>
            <p><strong>8: </strong>A BOD (Beneficial Owners Declaration) must be filled out, signed, and submitted with the application by each Shareholder and the director of the Company.</p>
            <p><strong>9: </strong>The application company's memorandum of association</p>
            <p><strong>10: </strong>The application company's articles of association</p>
            <p><strong>11: </strong>Brief of company activities and operations</p>
            <p><strong>12: </strong>Company's official registered address</p>
        </div>
        <div className="flex-3">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
