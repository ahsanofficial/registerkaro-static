import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/tds-return-filing/Forms_you_need_to_know.svg";

const Forms = () => {
  return (
    <div id="Forms">
        <p className="main-para">Following are certain forms that you need to know if you are looking forward to TDS Return Filings, as these forms will be extensively used in the entire process.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Forms you need to know for TDS Return Filing"
            className="Forms-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>Form 24Q: </strong>Used as a statement of TDS on Salary Income</p>
            <p><strong>Form 26Q: </strong>Used as a statement of TDS on non-salary Income</p>
            <p><strong>Form 26QB: </strong> Used as a statement for TDS against payment of immovable property</p>
            <p><strong>Form 27Q: </strong>Certificate for TDS on Interest, dividends (payable to NRIs), and the foreign companies</p>
            <p><strong>Form 27EQ: </strong> Used as a statement for TCS.</p>
            
        </div>
       
      </div>
    </div>
  );
};

export default Forms;


