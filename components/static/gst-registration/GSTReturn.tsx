import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const GSTReturn = () => {
  return (
    <div id="GSTReturn">
        <p className="main-para">Once online Registration of GST is done, it is compulsory to file the GST Return in India even if you have 0 turnover. Moreover, each month there are 4 GST Returns that need to be filed. Following is the brief summary about all the returns:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>GSTR 3B – Monthly: </strong> It’s a common return to be filed each & every month by the 20th of the following month. GSTR 3B is a summary return which needs to be filed compulsory even in case of 0 turnover.</p>
            <p><strong>GSTR 1 and 2:  </strong>This should be filed on a monthly/quarterly basis. GSTR 1 contained information details of all the invoices raised during the previous month, whereas, GSTR 2 contains the information of all the inputs consumed.</p>
            <p><strong>GSTR 3 – Final: </strong> GSTR 3 is a summary of all the transactions filed with the Government and it’s a summary of all the transactions mentioned in GSTR 1 & 2 during the previous quarter or month.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="GSTReturn-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default GSTReturn;


