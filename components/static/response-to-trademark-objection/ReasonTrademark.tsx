import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/response-to-trademark-objection/important.svg";

const ReasonTrademark = () => {
  return (
    <div id="ReasonTrademark">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Reason for Trademark Objection?"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-5">
            <ol>
                <li>The existing trademark is already registered with an identical logo.</li>
                <li>Incorrect trademark form submitted.</li>
                <li>Deceptive marks are included in the application.</li>
                <li>Offensive terms used in the trademark.</li>
                <li>Lack of distinctive character in the trademark.</li>
                <li>False specifications provided for goods or services.</li>
                <li>Incorrect form utilized for the trademark application.</li>
                <li>Deception present within the trademark.</li>
                <li>Lack of distinctive character observed in the trademark.</li>
                <li>Vague specification of goods or services provided.</li>
                <li>Descriptiveness is evident in the trademark.</li>
                <li>Unspecified goods and services in the application.</li>
                <li>Usage of generic terms in the trademark.</li>
                <li>Violation of trademark laws.</li>
            </ol>
        </div>
       
      </div>
    </div>
  );
};

export default ReasonTrademark;


