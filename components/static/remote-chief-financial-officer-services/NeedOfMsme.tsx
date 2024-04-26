import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const NeedOfMsme = () => {
  return (
    <div id="NeedOfMsme">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Micro, Small, and Medium-Sized Enterprises (MSMEs) in the manufacturing and service sectors—which account for a sizable share of the Indian economy—have received particular attention. It is predicted that the decade that follows COVID will be the peak for MSME in the country. Many MSME businesses fail despite having significant potential because of poor financial management, a lack of industry knowledge or mentors, and a shortage of decision-makers. A remote CFO service effectively identifies the problems that a micro, small, and medium-sized enterprise (MSME) is facing by offering them financial, legal, and professional advice specific to their industry as well as assistance with the success-based strategy. By assigning a Remote CFO to handle all of the company's managerial responsibilities, the company can focus on its core competency.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default NeedOfMsme;


