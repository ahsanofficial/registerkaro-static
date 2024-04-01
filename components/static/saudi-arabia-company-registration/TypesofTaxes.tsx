import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const TypesofTaxes = () => {
  return (
    <div id="TypesofTaxes">
        <p className="main-para">You must known about the following taxes you might have to pay while operating your business in Saudi Arabia:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Value Added Tax/VAT:</strong> In dealing of goods and services in Saudi Arabia, a set rate of 15% is applicable which becomes mandatory for firms to apply if their annual turnover is above 375,000 Saudi Riyals. </p>
            <p><strong>Income Tax:</strong> Businesses must pay 20% corporate income tax on their profits. Nonetheless, businesses operating in the oil and gas industry are subject to a number of tax laws.</p>
            <p><strong>Zakat:</strong> Another tax to pay is Zakat which is called the annual wealth tax imposed on both companies and individuals at the rate of 2.5% as per the shariah laws.</p>
            <p><strong>Excise Tax:</strong> This form of tax is applicable on different goods like tobacco, soft drinks, and energy drinks up to 100%.</p>
            <p><strong>Real Estate Transaction Tax/RETT:</strong> Regardless of the condition, layout, or anticipated use of the property at the time of sale, the RETT is assessed at a rate of 5% of the entire value of the sold property.</p>
            <p><strong>Municipality Tax:</strong> Another form of tax is the municipality tax applicable on companies for commercial activities which ranges between 2% to 5% on the gross revenue.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="TypesofTaxes-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default TypesofTaxes;


