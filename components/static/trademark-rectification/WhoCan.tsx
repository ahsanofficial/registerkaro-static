import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhoCan = () => {
  return (
    <div id="WhoCan">
        <p className="main-para">Any person connected to a trademark registration or negatively impacted by one has the right to request rectification, per Section 57 of the Act. It is crucial to remember that not every circumstance can be corrected, and in certain instances, correcting a mistake can lead to trademark registration being cancelled. As a result, care should be taken when handling this process. Any of the following can file for Trademark rectification:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. Trademark Holder: </strong>The owner of a trademark has the right to rectify any errors or omissions pertaining to their own mark and to request repair. It’s crucial to understand that under trademark law, parties other than the offended Party may request rectification.</p>
            <p><strong>2. Person Aggrieved: </strong>Anyone may apply for Trademark Rectification if they believe they have been wronged by something like the mark’s resemblance or the mark’s registration for illegal purposes. Any office with the relevant authority can handle this.</p>
            <p><strong>3. Third Party: </strong>The Trademark Rectification process can also be started by any third-party person or organization that is not related to the trademark proprietor or the person who feels wronged. This is relevant in situations when there has been miscommunication or where a trademark is being used in a way that violates the rights of others or certain segments of society.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="WhoCan-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoCan;


