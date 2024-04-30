import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Transferpricing = () => {
  return (
    <div id="transferpricing">
      <div className="benefits flex w-80 m-auto mobile-flex-column">

        <div className="flex-3">
          <Image
            alt="What to be there in Transfer Pricing Agreement:"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>

        <div className="flex-6 pt-2 ps-5  ">
          <p className="ps-5"><strong>1. </strong>Define the precise type of transactions that will be included in the agreement. This should entail a thorough explanation of the products, services, intellectual property, or funding being exchanged as well as the parties participating.</p>
          <p className="ps-5"><strong>2. </strong>Determine the most suitable pricing method for every controlled transaction. The selection of the method should depend on the individual circumstances of the transaction and the availability of data.</p>
          <p className="ps-5"><strong>3. </strong>Establish a range of transfer prices that are deemed appropriate for arm's length transactions. This interval needs to consider market situations, benchmarks in the industry, and any specific variables that could impact pricing.</p>
          <p className="ps-5"><strong>4. </strong>Include provisions for acquiring and upholding benchmarking data that validates the selected pricing approach, if necessary. This information is crucial in showing that the prices being levied align with those charged in similar unregulated transactions.</p>
          <p className="ps-5"><strong>5. </strong>Establish guidelines for adjusting transfer prices if they deviate from the agreed arm’s length range. These changes need to be in line with the chosen pricing approach and put in place in a timely manner.</p>
          <p className="ps-5"><strong>6. </strong>Think about whether it's necessary or advantageous to have an advance pricing agreement with tax authorities. An APA is a formal agreement between a taxpayer and tax authority that sets the approved pricing methods and terms for intercompany transactions. APAs offer certainty and assurance on the transfer pricing arrangement.</p>
          <p className="ps-5"><strong>7. </strong>Specify the criteria for documentation and record-keeping to meet local transfer pricing regulations. This involves keeping thorough records of the controlled transactions and accompanying documentation for the pricing approach.</p>
          <p className="ps-5"><strong>8. </strong>Incorporate measures to address conflicts between the taxpayer and tax authorities concerning the transfer pricing arrangement. This could include arbitration or alternative methods for resolving disputes. Provide guidelines for continuous monitoring to ensure that the transfer pricing agreement accurately represents the business's economic situation and complies with evolving tax regulations.</p>
          <p className="ps-5"><strong>9. </strong>Outline the criteria for yearly reporting to tax authorities, which involves providing necessary paperwork and financial information regarding regulated transactions.</p>

         



        </div>

      </div>
    </div>
  );
};
