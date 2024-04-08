import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/malaysia-company-registration/Taxes_applicable_in_Malaysia.svg";

const Taxes = () => {
  return (
    <div id="Taxes">
        <p className="main-para">Before starting your business in Malaysia, you must know the following taxes:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>Corporate Tax: </strong>Corporate Tax is applicable on all kinds of companies whether resident and non-resident companies operating in Malaysia at the rate of 24% which might vary depending on the type of company and its revenue generated.</p>
            <p><strong>Sales & Service Tax [SST]: </strong>In order to register your company, you must have at least one shareholder on the list of your details.</p>
            <p><strong>Withholding Tax: </strong>Withholding tax comes into play when the payer has to pay to a non-resident at different rates varying from 3% to 25%. The tax rates vary as per the nature of the payment that has to be made to the non-resident.</p>
            <p><strong>Stamp Duty: </strong>There are two types of stamp duty, fixed duty and ad valorem duty which are applicable on documents such as share transfer, property transfer, annuity sales, rental or lease agreement, etc.</p>
            <p><strong>Real Property Gain Tax: </strong>you must have an address for office which is required to be registered as well for further proceeding ahead with the registration process of your business</p>
        </div>
        <div className="flex-4">
        <Image
            alt="Taxes applicable in Malaysia"
            className="Taxes-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Taxes;


