import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/psara-license/signigicant_role.svg";
interface HeroProps {
    cityName: string;
}
const Significant = ({ cityName }: HeroProps) => {
  return (
    <div id="Significant">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Significant Role Played by Private Security Agencies in {cityName}"
            className="Significant-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
        <p>Private security agencies play a pivotal role as business entities dedicated to providing security services across diverse sectors. The implementation of the Private Security Agencies (Regulation) Act, 2005 (PSARA) was a strategic move to establish and uphold a specific standard of professionalism within the realm of security services. A crucial prerequisite for the operation of security agencies in {cityName} is the acquisition of a PSARA license, which serves as a fundamental mandate.</p>
        <p>Beyond the provision of security services, these agencies also contribute to the professional development of individuals by offering comprehensive training programs tailored to the demands of security-centric careers. This dual focus on service provision and skill enhancement underscores the integral role that private security agencies play in ensuring the safety and protection of businesses from various verticals in the dynamic landscape of {cityName}.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Significant;


