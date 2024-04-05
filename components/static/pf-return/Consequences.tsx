import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Consequences = () => {
  return (
    <div id="Consequences">
        <p className="main-para">In event of late filing of PF Return attracts penalty on the applicant. The penalty can be observed in the following manner:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <ol>
                <li>5% rate of penalty on the furnished amount if the filing is done beyond due date but before 2 months</li>
                <li>10% rate of penalty on the furnished amount if the filing is done after 2 months but before 4 months from the due date</li>
                <li>15% rate of penalty on the furnished amount if the filing is done after 4 months but before 6 months from the due date</li>
                <li>25% rate of penalty on the furnished amount if the filing is done after 6 months from the date of filing.</li>
            </ol>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Consequences-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Consequences;


