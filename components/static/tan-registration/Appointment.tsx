import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-registration/Benefits_of_TAN_Registration_.svg";

export const Appointment = () => {
  return (
    <div id="appointment">
      <p className="main-para">There are many benefits of TAN registration among them here are few benefits which are listed below-</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Benefits of TAN Registration:"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 ">
          <p><strong>1. Ensuring Legal Compliance:</strong>  Obtaining a Tax Deduction and Collection Account Number (TAN) is essential for any organization charged with tax deductions or collections in order to ensure legal compliance. Having a TAN protects you from potential legal consequences or penalties for non-compliance by ensuring that tax laws are followed.</p>
          <p><strong>2. Simplified Tax Procedures:  </strong> Having a TAN makes your tax deduction and collection processes more effective. As a result, there is less chance of mistakes or cycle lags and timely and precise tax deductions and filings to the government are made possible.</p>
          <p><strong>3. Easy Monitoring and Reconciliation: </strong> A TAN gives you a simple way to keep track of and balance your tax transactions. Your TDS/TCS records and certificates, which attest to the correct tax deduction and payment, are easily retrieved. Such a methodical strategy strengthens regulatory compliance and streamlines the oversight of tax transactions.
        </p>
        </div>
      </div>
    </div>
  );
};
