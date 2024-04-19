import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Challenges = () => {
  return (
    <div id="Challenges">
      <p className="main-para">
        The process of NSIC registration is a road with hurdles which are
        expected to face for a successful journey. Few of such hurdles are as
        follows:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <h3>Complex Process</h3>

          <p>
            The NSIC registration process is quite complex to be covered single
            handedly. This Becomes a problem for individuals dealing with the
            process without a team as the burden leads to missing important
            compliances, documents and other things.
          </p>

          <h3>Comprehensive Documentation</h3>

          <p>
            The documentation required to be prepared for the NSIC registration
            is quite in numbers which makes the process a bit exhausting. This
            creates exertion for the applicant to prepare error-free documents
            within the specified timeline which eventually leads to committing
            mistakes in the process.
          </p>

          <h3>Exhaustive Compliances</h3>

          <p>
            The compliances list for NSIC operation and registration both is
            quite long to be covered. Therefore it is a challenge to meet the
            compliances on your own without any external assistance. If not
            taken care, it is expected to receive notice for non-compliance.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt=""
            className="Challenges-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
