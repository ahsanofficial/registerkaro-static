import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/psara-license/Documents_Required.svg";
interface HeroProps {
    cityName: string;
}
const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">To obtain a Private Security Agencies (Regulation) Act, 2005 (PSARA) license, the following registration certificates and documents are necessary</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>PAN (Permanent Account Number)</p>
            <p><strong>2. </strong>GSTIN (Goods and Services Tax Identification Number)</p>
            <p><strong>3. </strong>Provident Fund Registration</p>
            <p><strong>4. </strong>ESIC (Employees State Insurance Corporation) Registration</p>
            <p><strong>5. </strong>Registration under the Shops and Commercial Establishments Act</p>
            <p><strong>6. </strong>Registration under the Labour Act</p>
            <p><strong>7. </strong>Proof of identity for directors and employees</p>
            <p><strong>8. </strong>Copies of Income Tax Returns for Directors</p>
            <p><strong>9. </strong>Two passport-size photographs of promoters along with their PANs</p>
            <p><strong>10. </strong>Proof of address for the agency office</p>
            <p><strong>11. </strong>Affidavit as per Section 7 (2) of PSARA, 2005</p>
            <p><strong>12. </strong>Security training affidavit</p>
            <p><strong>13. </strong>Certificate of Incorporation</p>
            <p><strong>14. </strong>Signed Memorandum of Understanding (MOU) with the training institute</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Documents Required for PSARA License"
            className="DocumentsRequired-img w-100"
            height={750}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsRequired;


