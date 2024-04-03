import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/psara-license/Who_is_Eligible_for.svg";
interface HeroProps {
    cityName: string;
}
const Eligible = ({ cityName }: HeroProps) => {
  return (
    <div id="Eligible">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Who is Eligible for PSARA?"
            className="Eligible-img w-100"
            height={880}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Regarding Business Organization Type:</strong>Entities eligible for registration under the Private Security Agencies (Regulation) Act, 2005 (PSARA) and the subsequent acquisition of a PSARA license include:</p>
            <div className="ps-5">
                <p>Sole Proprietorship</p>
                <p>One Person Company</p>
                <p>Partnership Firm</p>
                <p>Limited Liability Partnership (LLP)</p>
                <p>Association of Persons</p>
                <p>Private Limited Company</p>
            </div>
            <p><strong>Regarding Director/Principal Officer Role Eligibility:</strong>Becoming a Director/Principal Officer is subject to specific eligibility criteria:</p>
            <div className="ps-5">
                <p>Must be a citizen of {cityName}.</p>
                <p>Must be at least 18 years old.</p>
                <p>Must possess adequate financial resources to cover business expenses.</p>
                <p>Must not have any convictions.</p>
            </div>
            <p><strong>Regarding Security Guard Role Eligibility:</strong>Qualifying for the role of a security guard requires meeting the following criteria:</p>
            <div className="ps-5">
                <p>Must be a citizen of {cityName}.</p>
                <p>Must be between the ages of 18 and 65.</p>
                <p>Must have undergone prior training.</p>
                <p>Must not have been terminated from any government service.</p>
                <p>Must meet the specified physical attributes.</p>
                <p>Proof of the individual’s character must be provided.</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default Eligible;


