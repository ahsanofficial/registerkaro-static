import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Why = () => {
  return (
    <div id="Why">
      <div className="benefits flex w-80 m-auto mobile-flex-column">

        <div className="flex-3">
          <Image
            alt="Things to Know About Transfer Pricing Agreement"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>

        <div className="flex-6 pt-2 ps-5  ">
          <p className="ps-5"><strong>1. </strong> Transfer pricing involves establishing a markup depending on the expenses. Understanding the expenses faced by a company, including transportation, packaging, shipping, insurance, and any relevant taxes or customs fees, is important.</p>
          <p className="ps-5"><strong>2. </strong> Transfer pricing arrangements typically involve related companies, such as parent and subsidiary entities. The agreement sets the price for the exchange of goods between the parent and daughter companies. The agreement could involve two or multiple child companies of the main corporation, or among various firms in a conglomerate. For instance, a parent company might produce the vehicles by putting together the body and completing the finishing touches.</p>
          <p className="ps-5"><strong>3. </strong> Two subsidiaries that are entirely owned produce parts like brake lining and other components. Transfer pricing assists in establishing the pricing of the components exchanged between the parent company and its subsidiaries. Transfer pricing ensures that the goods produced by a subsidiary have a consistent market with stable profit margins. It also aids in ensuring a consistent flow of raw materials or components to the main company and enables ongoing production. The prices set for transporting goods usually align more closely with the fair market price of those goods.</p>
          <p className="ps-5"><strong>4. </strong> Transfer pricing occurs within related enterprises. Therefore, it is not advantageous to sell at a price lower or higher than the market price of individual entities or the overall group. Selling goods above or below the market price will result in an unequal sharing of profits among various entities in a group.</p>
         
         



        </div>

      </div>
    </div>
  );
};
