import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/malaysia-company-registration/Post_Registration_Compliances.svg";

const PostRegistration = () => {
  return (
    <div id="PostRegistration">
        <p className="main-para">You may follow the given step by step instructions for Company Registration in Malaysia:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Post Registration Compliances in Malaysia"
            className="PostRegistration-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Auditor Appointment: </strong>Before the first annual general meeting, every corporation is required to appoint one auditor. A minimum of 30 days before the deadline for submitting the first financial statements, the board of directors of newly incorporated firms must designate the first auditor.</p>
            <p><strong>Licenses & Permits: </strong>You now have to register your company with different organizations after company registration to obtain permits and licenses. These registrations include EPF Registration, SOCSO Registration, LHDN Registration, PERKESO Registration, etc.</p>
            <p><strong>Tax Registration: </strong>Another mandatory compliance is to register your company with the tax authorities of Malaysia. Afterwards, you must adhere to the annual filing if your company taxes.</p>
            <p><strong>Bank Account Opening: </strong>After registering your business in Malaysia, you are able to open a corporate bank account with the authorized banks in Malaysia. Check their policies and benefits before availing their services.</p>
        </div>
     
      </div>
    </div>
  );
};

export default PostRegistration;


