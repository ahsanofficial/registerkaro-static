import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/small-scale-industries-registration/Documents_you.svg";
interface HeroProps {
    cityName: string;
}
const Documents = ({ cityName }: HeroProps) => {
  return (
    <div id="Documents">
        <p className="main-para">A few documents must be presented as part of the registration process in order to confirm the applicant’s and the company’s legitimacy. These consist of, but are not restricted to:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Documents you will need for Small Scale Industries Registration"
            className="Documents-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <ol>
                <li>PAN card</li>
                <li>Aadhaar card</li>
                <li>Any pertinent certificates (OBC, SC/ST, handicapped, etc.)</li>
                <li>Evidence of the applicant’s address [Lease agreement, utility bills]</li>
                <li>Business account number, and IFSC</li>
                <li>Copy of Purchase bills of resources like raw materials, machinery, and so on.</li>
                <li>Evidence of the type of business [e.g., Hindu Undivided Family, partnership, single proprietorship, etc.]</li>
            </ol>
        </div>
     
      </div>
    </div>
  );
};

export default Documents;


