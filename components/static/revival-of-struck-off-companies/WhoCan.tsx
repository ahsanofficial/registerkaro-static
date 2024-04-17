import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/revival-of-struck-off-companies/Who_can_apply_for_Revival.svg";
interface HeroProps {
    cityName: string;
}
const WhoCan = ({ cityName }: HeroProps) => {
  return (
    <div id="WhoCan">
        <p className="main-para">Following are the persons who can make an appeal in NCLT to restore the company:</p>
        <div className="flex-3">
        <Image
            alt="Who can apply for Revival?"
            className="WhoCan-img w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
        <div className="flex-7">
            <ol>
                <li>Company;</li>
                <li>Any member/ creditor;</li>
                <li>Workmen.</li>
            </ol>
            <p><strong>The revival of struck off companies typically involves several steps:</strong></p>
            <p><strong>1. Application for Company Restoration: /</strong>File an application for company restoration with the appropriate governing body or registrar, providing reasons for revival and paying any outstanding fees or penalties.</p>
            <p><strong>2. Court Order (if required): /</strong>In some cases, especially if the company was dissolved for a long time or voluntarily struck off, a court order might be necessary for revival.</p>
            <p><strong>3. Clearance of Debts and Obligations: /</strong>Clear any outstanding debts, taxes, or obligations the company had before dissolution. This might involve settling with creditors or addressing legal requirements.</p>
            <p><strong>4. Updated Company Information: /</strong>Ensure all company information, such as director details, shareholding structure, and registered.</p>
        </div>
        
      </div>
    </div>
  );
};

export default WhoCan;


