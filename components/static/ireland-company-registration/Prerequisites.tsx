import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Prerequisites_of.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are certain types of taxes applicable on businesses operating in the Ireland:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       <div className="flex-4 ">
          <Image
            alt="Types of Taxes you must know"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-3">
           <p><strong>Corporation Tax: </strong>Ireland levies taxes on domestic companies' worldwide profits. Earnings from sources within Ireland are subject to taxation for non-resident businesses. 12.5% is the standard corporation tax rate.</p>
           <p><strong>Value Added Tax: </strong>While 23% is the standard rate of VAT, there are a number of goods and services that are subject to lesser rates, such as 13.5%, 9%, and 0%.</p>
           <p><strong>Custom Duty: </strong>Another form of tax that you might experience is the custom duty applicable at the rate of 0% to 14% depending upon the nature of the goods, industry operated, size of business, etc. </p>
           <p><strong>Pay-related Social Insurance: </strong>Employers are required to make PRSI contributions at a rate of 11.05%, which are deducted from profits for business tax purposes. </p>
        </div>
       
      </div>
    </div>
  );
};
