import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Applicable Taxes on Foreign Subsidiary in India.svg";

interface HeroProps {
  cityName: string;
}

export const ApplicableTaxes = ({ cityName }: HeroProps) => {
  return (
    <div id="ApplicableTaxes">
        <p className="main-para">Taxation rules for foreign subsidiary companies in {cityName} are clearly outlined and must be followed diligently to ensure timely tax payments. Here are the main aspects of taxation for such companies:</p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Applicable Taxes on Foreign Subsidiary in India"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>Taxable Income: </strong>All incomes earned by the subsidiary company, whether within or outside {cityName}, are subject to taxation. This includes dividends received from foreign subsidiaries as well.</li>
            <li><strong>Tax Rates, Surcharge and Cess: </strong>Foreign subsidiaries in {cityName} are generally taxed at a rate of 40%. Furthermore, a surcharge of 2% is imposed on companies with income between Rs. 1 Crore and Rs. 10 Crores and companies with income exceeding Rs. 10 Crores face a surcharge of 5%. Moreover, a 4% health and education cess is added to the total tax payable.</li>
            <li><strong>Minimum Alternate Tax (MAT): </strong>Companies that choose the concessional tax payment options under Section 115BAA and 115BAB are exempt from paying Minimum Alternate Tax (MAT). Other companies are required to pay a 15% tax on book profits as per MAT provisions.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
