import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Benefits of GST Registration.svg";

export const BenefitsGst = () => {
  return (
    <div id="BenefitsGst">
        <p className="main-para">Registering for GST offers several advantages:
</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       
        <div className="flex-4">
          <Image
            alt="Benefits of GST Registration"
            className="Importance-img-h-100 w-100"
            height={973}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
           <p><strong>1. Makes Taxing Easier:</strong> GST combines different taxes, making the tax process simpler and creating a unified market in India.</p>
           <p><strong>2. Decreases Costs:</strong> Getting rid of stacked taxes lowers the prices of goods and services for buyers.</p>
           <p><strong>3. Saves Time:</strong> Small businesses with turnovers below certain limits don't have to pay GST, saving them from complicated tax processes.</p>
           <p><strong>4. Fights Corruption: </strong>GST helps fight corruption and promotes transparency in business transactions by ensuring proper receipts.</p>
           <p><strong>5. Standardizes Taxation: </strong>GST Registration allows for centralized registration and a standardized tax process, making online tax filing easier.</p>
           <p><strong>6. Reduces Tax Evasion:</strong> By integrating various taxes, GST makes it harder to evade taxes.</p>
           <p><strong>7. Higher Registration Threshold:</strong> The threshold for registering for GST is higher compared to the old VAT system, benefiting small traders and service providers.</p>
           <p><strong>8. Composition Scheme for Small Businesses: </strong>Small businesses with a turnover between Rs 20 to 75 lakh can enjoy lower taxes through the Composition scheme.</p>
           <p><strong>9. Simple Online Process: </strong>The entire GST process, from registration to filing returns, is done online, which is convenient for businesses, especially start-ups.</p>
           <p><strong>10. Fewer Compliances: </strong>GST replaces multiple tax returns and compliances with a single return, reducing the administrative burden on businesses.</p>
           <p><strong>11. Regulates Informal Sectors:</strong> GST brings in online compliances and payment methods, promoting accountability and regulation in sectors like building construction and textiles.</p>

        </div>
      </div>
    </div>
  );
};
