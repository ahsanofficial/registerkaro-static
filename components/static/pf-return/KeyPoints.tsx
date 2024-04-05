import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const KeyPoints = () => {
  return (
    <div id="KeyPoints">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
        <div className="flex-3">
        <Image
            alt=""
            className="KeyPoints-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <ol>
                <li>The EPF deducts payments from more than just your pay. Additionally, your employer is required to contribute the same amount each month to your EPF account.</li>
                <li>Workers are required to link their bank account and Aadhaar number to their UAN.</li>
                <li>Anyone is eligible to be nominated for an EPF account. The nominee will settle the account balance in the event of the account holder’s passing.</li>
                <li>By sending Form 2 to the EPFO or financial department of your business, you can modify the nominee.</li>
                <li>Up to Rs 1,250, or about 8.33% of your employer’s monthly contribution, would go toward the Employee Pension Scheme (EPS). When you retire and meet the requirements, this will assist you in receiving a monthly pension.</li>
                <li>One can only be able to take out a portion of the balance from your EPF account, depending on the reason for the withdrawal, if you choose to quit your employment and take the entire sum with you. A few legitimate explanations include being unemployed, retiring, buying land, building or renovating a home, getting married, going to school, paying back a mortgage, and having health issues.</li>
                <li>You can take 100% of the sum in your EPS account if you are retiring and have worked continuously for the past ten years.</li>
                <li>If you haven’t had a job for ten years straight, you can only take out funds from your EPS account in accordance with the legal rules.</li>
            </ol>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;


