import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/liquor-license/Documents.svg";
interface HeroProps {
    cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following are the general documents that are required for the Liquor License approval in any state, however, the list is not exhaustive:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
            <Image
              alt="Documents required for Liquor License"
              className="DocumentRequired-img w-100"
              height={600}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Proof of the applicant’s identity and address </p>
            <p><strong>2. </strong>Provide evidence of the business location</p>
            <p><strong>3. </strong>NOC from the state fire department and the relevant municipal corporation</p>
            <p><strong>4. </strong>properly completed application forms for companies’ AoA and MoA</p>
            <p><strong>5. </strong>current copy of the ITR</p>
            <p><strong>6. </strong>Applicant’s passport size photograph </p>
            <p><strong>7. </strong>Affidavit indicating lack of criminal records in the applicant’s name </p>
            <p><strong>8. </strong>Affidavit declaring the applicant has no overdue dues in their name</p>
        </div>
      </div>
    </div>
  );
};
