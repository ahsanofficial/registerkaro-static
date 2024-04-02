import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Penalty = () => {
  return (
    <div id="Penalty">
        <p className="main-para">Failing to file income tax returns within the stipulated timeframe attracts penalties and incurs interest on delayed tax payments. Recent revisions have heightened the penalties for late filing, with the updated structure as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">

        <div className="flex-7">
            <p><strong>Late Filing from August 1st to December 31st:</strong> A penalty of Rs. 5000 is imposed for late filing during this period.</p>
            <p><strong>Late Filing After December 31st:</strong> If the filing is delayed beyond December 31st, the penalty increases to Rs. 10,000.</p>
            <p><strong>Penalty for Taxable Income Below Rs. 5 Lakhs:</strong> Taxpayers with a taxable income less than Rs. 5 lakhs face a reduced penalty of Rs. 1000 for late filing.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Penalty-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Penalty;


