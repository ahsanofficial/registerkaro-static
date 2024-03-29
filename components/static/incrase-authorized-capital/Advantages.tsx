import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/increase-authorized/What_are_the_Advantages.svg";
interface HeroProps {
    cityName: string;
}
const Advantages = ({ cityName }: HeroProps) => {
  return (
    <div id="Advantages">
      <p className="main-para">Following are the advantages that you can get once you Increase Authorized Capital:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Increasing the Confidence of Investor:</strong> Authorized Capital increases confidence in investors by demonstrating the Company’s capacity to raise additional capital when required. It signifies the Company’s preparedness to support its growth plans, pursue strategic initiatives & meet financial obligations, increasing investor trust & attracting potential stakeholders.</p>
            <p><strong>Ensuring Flexibility in Capital Structure:</strong> Registered capital provides Company’s flexibility to structure its capital base. It allows the Company to issue new shares & raise additional funds as required, subject to compliance with legal regulations & obtaining shareholder approval.</p>
            <p><strong>Facilitating Future Growth:</strong> By setting a higher authorized capital, a company can plan for future expansion & accommodate potential funding requirements without the need for frequent changes to its capital structure. This enables the Company to adapt to changing market conditions & seize growth opportunities.</p>
            <p><strong>Protection against dilution:</strong> Authorized capital also safeguards existing shareholders from dilution, this is because the Company cannot issue more shares than the Authorized Capital without amending the AoA, which would acquire the approval of the existing shareholders.</p>
            <p><strong>More Opportunities for Mergers & Acquisitions (M&A):</strong> Companies with a high Authorized Capital are also more attractive to acquirers as they provide more opportunities for growth & expansion. This makes it easier for companies to enter into M&A which can be beneficial for both parties.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="What are the Advantages of Increasing Authorized Capital?"
            className="Advantages-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;


