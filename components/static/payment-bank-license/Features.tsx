import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/payment-bank-license/Features of a Licensed Payments Bank.svg";

export const Features = () => {
  return (
    <div id="Features">
      <p className="main-para">Licensed Payment Banks come with the following features:</p>
      <div className="Features flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. Deposit Limit of Rs. 1 lakh : </strong>RBI has authorised Payment Banks to accept deposits up to Rs. 1 lakh only. This limit is prescribed by RBI to safeguard customer interests.</p>
          <p><strong>2. Debit Card Facility : </strong>Payment Banks offer both physical and virtual debit cards, enabling users to access ATMs domestically and internationally without additional charges for cash withdrawals.</p>
          <p><strong>3. Seamless Online Transactions : </strong>Unlike traditional banks, Payment Banks streamline money transfers and transactions through digital platforms, providing online services for fund transfers such as NEFT, IMPS, and others.</p>
          <p><strong>4. Convenient Payment Methods : </strong>Regardless of location, Payment Banks enable digital payments, reducing the necessity of visiting physical bank branches for cash deposits or withdrawals.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Features of a Licensed Payments Bank"
            className="Features-img w-100 Importance-img-h-100"
            height={375}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
