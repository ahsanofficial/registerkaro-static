import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/bis-certification-for-power-banks/revocation.svg";

const Revocation = () => {
  return (
    <div id="Revocation">
        <p className="main-para">BIS may cancel, suspend, or revoke your BIS Certification for Power Banks if you:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong> 1. </strong>Fail to comply with the BIS standards and regulations</p>
            <p><strong> 2. </strong>Fail to pay the BIS fees and charges</p>
            <p><strong> 3. </strong>Fail to cooperate with the BIS surveillance and inspection</p>
            <p><strong> 4. </strong>Provide false or misleading information or documents</p>
            <p><strong> 5. </strong>Misuse or abuse the BIS Standard Mark</p>
            <p><strong> 6. </strong>Violate the BIS Act, Rules, or Regulations</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Cancellation/Suspension/Revocation of certification"
            className="Revocation-img w-100"
            height={310}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">BIS will issue a show-cause notice to you before taking any action against your BIS CRS Registration. You will have an opportunity to present your case and submit your explanation. BIS will consider your response and decide whether to cancel, suspend, or revoke your BIS CRS Registration. BIS will inform you of its decision and the reasons for it. You can appeal against the BIS decision within 30 days of receiving the notice.</p>
    </div>
  );
};

export default Revocation;


