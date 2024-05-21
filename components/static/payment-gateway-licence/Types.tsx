import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/payment-gateway-licence/Benefits.svg";

export const Types = () => {
  return (
    <div id="Types">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Different types of companines to be chosen"
            className="Importance-img-h-100 w-100"
            height={950}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-5">
            <p><strong> Legal Compliance : </strong> Companies providing Payment Gateway services having the lisence and permission for it, which is regulated by a regulatory body makes sure that there is proper authorisation and there is compliance with all the necessary laws and lisecnces for payment gateway business to operate upon.</p>
            <p><strong> Credibility and Trust : </strong>Having compliances and the lisences that are regulated and authorised by the government increases the trust and credibility of the general public on the company.Because to facilitate banking process one needs to submit their bank details and these would be operating on their hard-earned money. In India during the end of the previous decade the main challenge these payment gateways faced is to get the trust of the Indian customers in the Indian market.</p>
            <p><strong> Access to Payment Systems : </strong>Having lisence not only facilitates payment merely between two individuals, it is much more it connects the service with banks, with services that facilitate investments. Having lisence gives acesss to all the finance related service as well as investing finance services.</p>
            <p><strong> Market Expansion : </strong> Increasing in access to payment also increases the scope of expansion in the market for the service provider allowing to reach to a wider customer base and more people in the process The customer base not only limits to just merely two people merely making payments, but it extends to banking business and also it reaches to people looking for guidance related to investment of their finances.</p>
            <p><strong> Revenue Generation : </strong>Expanding the market leads to more leads to more revenue being generated from the business. Earlier in order to make some money, these platforms used to merely have their customer base to two people who are trying to just send money to each other. But with the expansion in market and increase in the customer base, the scope of revenue generation by acquiring lisence and proper authorisation increases way more.</p>
        </div>
       
      </div>
    </div>
  );
};
