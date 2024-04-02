import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Following are the benefits of GST Registration in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. Small Business Composition Scheme:</strong> Under GST, small businesses (with a turnover of Rs. 20-75 lakhs) can benefit as it gives an option to lower taxes by utilising this Scheme. This move has brought down the tax & compliance burden on many small businesses in India.</p>
            <p><strong>2. Less Compliance:</strong> In comparison to the pre-GST era, Goods & Services Tax provides a single unified return rather than the several compliance & returns provided by Excise, Service Taxes & VAT.</p>
            <p><strong>3. Access to a huge customer base:</strong> Access to a big customer base is another benefit of GST Registration. Being registered for GST can lead to new opportunities with these clients since many corporations & governmental organisations are required to work only with registered suppliers. Moreover, some customers might favour doing business with registered companies because this can offer a big level of assurance that the company is operating legally & in compliance with tax regulations. </p>
            <p><strong>4. Ability to collect & claim ITC:</strong> A Company must collect & charge GST from its customers on taxable supplies after it has registered for Goods & Services Tax. The firm is nonetheless permitted to claim ITC (Input Tax Credits) for the GST, it has paid on its outgoings. As an outcome, the Government would allow you to get a refund for the GST you paid on inputs such as goods, services, supplies as a credit against the GST you paid on outputs like sales. The ability to make ITC claims can increase a Company’s cash flow & lower its overall GST liability.</p>
            <p><strong>5. E-Commerce Treatment:</strong> E-Commerce was given a distinct status under GST, which eliminated inter-state disputes.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


