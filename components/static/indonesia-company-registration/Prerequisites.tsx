import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/indonesia-company-registration/Types_of_taxes_applicable.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are certain types of taxes applicable on businesses operating in the Indonesia:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       <div className="flex-4 ">
          <Image
            alt="Types of taxes applicable in Ireland"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-1">
           <p><strong>Corporate Income Tax: </strong>Ordinary corporate income tax is applied at a rate of 22% to both domestic and foreign incomes when a corporation earns more than IDR 50 billion yearly. Reduced revenue businesses pay less in taxes. If public companies achieve certain standards, such as a minimum listing criteria of 40%, they can receive a tax discount of 3% off the ordinary rate, making their overall tax rate 19%.</p>
           <p><strong>Value Added Tax: </strong>Government regulations can cause the VAT rate in Indonesia to fluctuate between 5% and 15%, though the ordinary rate is typically 11%. The import of commodities is subject to an 11% VAT, whilst the export of goods is free from it.</p>
           <p><strong>Social Security Contributions: </strong>Ensuring that employees are enrolled in the Social Security program is the responsibility of the employers. The percentage of normal earnings that is used to calculate employer premium contributions might vary from 0.24% to 4%. </p>
           <p><strong>Regional Taxes: </strong>Numerous local taxes and fines may fall under the purview of a corporate taxpayer. The maximum rates range from 0.2% to 75% of the various reference values that the municipal governments in question have selected.</p>
        </div>
       
      </div>
    </div>
  );
};
