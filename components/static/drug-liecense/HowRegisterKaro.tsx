import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg"

export const HowRegisterKaro = () => {
  return (
    <div id="HowRegisterKaro">
        <p className="main-para">RegisterKaro has been one step solution for getting Drug License, because of the varied ranges of benefits such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-5">
          <p><strong>Group of Experts :</strong> RegisterKaro holds a large group of experts from all over the world having specialization in getting Drug License. Our team of experts make sure that you work is taken care of in the most effective possible manner.</p>
          <p><strong>Cost-effective :</strong> RegisterKaro Drug License registration are of premium quality at the most efficient rate, which suits the client’s pocket, making sure that quality service is not the only thing which client gets on our platform.</p>
          <p><strong>Client-oriented approach :</strong>  Our team of experts is well trained and equipped with a client-oriented approach, keeping in mind that the process must be client-centric, focusing on meeting all the requirements of their business and, therefore, satisfying their needs.</p>
          <p><strong>Trust builders :</strong> RegisterKaro builds the trust among its clients and because of only this trust we have built a good network in worldwide marketplace.</p>
        </div>
        <div className="flex-4 mt-4">
          <Image
            alt="Information and Documents Required for USA Company Registration
            In order to register a company in the US, a number of required documents and pieces of information must be provided. A detailed list of all the items you’ll need to start the process of USA Company Registration is provided below:"
            className="HowRegisterKaro-img w-100"
            height={500}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
