import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Whytransfer = () => {
  return (
    <div id="Whytransfer">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">

       

        <div className="flex-6 pt-2 ps-5  ">
          <p className="ps-5"><strong>1. </strong> Transfer prices are employed to evaluate individual components of a larger multi-entity company as if they were standalone entities. Although multi-entity corporations are often grouped together for financial reporting, they have the option to report each entity individually for tax purposes. A transfer price may be required for accounting purposes when these entities report their profits in order to calculate transaction costs.</p>
          <p className="ps-5"><strong>2. </strong> The main goal of Transfer Pricing Agreements in India is to ensure arm’s length pricing is implemented and upheld. This rule states that the prices established in TPAs should closely mirror those that would naturally occur between unrelated entities in transactions. TPAs strive to prevent artificial price manipulation that may result in tax avoidance or revenue shifting by following this standard.</p>
          <p className="ps-5"><strong>3. </strong> TPAs are especially important for multinational companies that have operations in various global regions. These companies often transfer goods and services among their different subsidiaries and divisions. TPAs act as a means to standardize and supervise these internal company transactions, guaranteeing uniformity and equity in pricing.</p>
          <p className="ps-5"><strong>4. </strong> During a time of globalization, TPAs are instrumental in dealing with the issues raised by tax authorities in various countries. Tax authorities closely monitor the pricing of these transfers between companies, as it directly affects the calculation of taxable income in their areas. TPAs are crucial instruments for ensuring tax compliance by ensuring the accurate payment of taxes in each applicable jurisdiction. Aligning with tax regulations not only encourages financial transparency but also supports global tax fairness and equity.</p>
         
         



        </div>
        <div className="flex-3">
          <Image
            alt="Why Transfer Pricing"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>

      </div>
    </div>
  );
};
