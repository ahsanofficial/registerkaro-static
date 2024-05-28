import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const WhoCanObtain = () => {
  return (
    <div id="WhoCanObtain">
      <p className="main-para">The following persons are eligible to obtain a Payment Bank License:</p>
      <div className="WhoCanObtain flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong>Individuals/Professionals</p>
          <p><strong>2. </strong>Mobile telephone companies</p>
          <p><strong>3. </strong>Non-Banking Financial Companies (NBFCs)</p>
          <p><strong>4. </strong>Real sector cooperatives</p>
          <p><strong>5. </strong>Supermarket Chains</p>
          <p><strong>6. </strong>Public sector entities</p>
          <p><strong>7. </strong>Promoter or group of promoters who have a joint venture with a scheduled commercial bank</p>
          <p><strong>8. </strong>Non-bank prepaid payment instrument under the Payment and Settlement Systems Act, 2007</p>
          <p><strong>9. </strong>Corporate Business Correspondence</p>
          <p><strong>10. </strong>Public companies</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Who can Obtain a Payment Banks License?"
            className="WhoCanObtain-img w-100 Importance-img-h-100"
            height={475}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
