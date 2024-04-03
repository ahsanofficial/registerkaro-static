import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Revival = () => {
  return (
    <div id="Revival">
        <p className="main-para">The grounds on which NCLT does the Revival of Struck Off Companies are as follows:-</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <ol>
                <li>The company holds any immovable property.</li>
                <li>The company, apart from the Registrar of Companies, has complied with GST, income tax, provident fund, and such authorities,</li>
                <li>In case there is evidence stating that the company has an ongoing business as active transaction in the bank statements of the company.</li>
                <li>The company is renewing any license on an annual basis and other documents depending upon the circumstances.</li>
                <li>Any documents that shows that the company is ongoing business as active transaction in the bank statements of the company</li>
                <li>The company is renewing any license on an annual basis and other documents depending upon the circumstances.</li>
                <li>Any documents that shows that the company is ongoing or active and it will be in the public interest to revive the company.</li>
            </ol>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Revival-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Revival;


