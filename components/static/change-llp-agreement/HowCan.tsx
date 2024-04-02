import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const HowCan = () => {
  return (
    <div id="HowCan">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>Submit a service request.</p>
            <p><strong>2. </strong>Our team will be there with you, to understand the necessary details about the business and provide you with a simple checklist</p>
            <p><strong>3. </strong>Once you fill-up the checklist and provide us with the required documents, our team shall verify them</p>
            <p><strong>4. </strong>We shall prepare the form and the required documents</p>
            <p><strong>5. </strong>In case of any query(s) from the department, our experts shall respond to them on your behalf</p>
            <p><strong>6. </strong>Once the application is accepted, we shall provide you with the acknowledgement or proof</p>
            <p><strong>7. </strong>Throughout the process our compliance manager will keep you updated</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="HowCan-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default HowCan;


