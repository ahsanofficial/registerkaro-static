import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhyPatent = () => {
  return (
    <div id="WhyPatent">
      <p className="main-para">
        In the existing competitive market of today’s world, it is important to
        protect the work of the individual, be it innovation, creativity, or
        Idea, which gave existence to Patent Registration. For the reason,
        Patent Registration holds multi-disciplinary benefits, few of which can
        be seen as follows:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="WhyPatent-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <h3>Legal Protection</h3>
          <p>
            Patents have many positive economic effects. A patent makes it
            simple for the owner to profit from their creation because it can
            only be applied to new and inventive goods, procedures, or devices.
            If you have built a machine, you can license the rights to use it in
            a variety of businesses in exchange for money.{" "}
          </p>

          <h3>Ownership establishment</h3>
          <p>
            Patent rights provide for public disclosure, which aids in the
            inventor’s portfolio building and increases capital, market value,
            and potential business partners. Publicly disclosing
            invention-related material will highlight the inventors’ expertise
            and strong mastery of the technical field. The owner gains from all
            of these facts since they draw in high-end and prestigious
            investors, stockholders, business associates, and customers.
          </p>

          <h3>Market Access</h3>
          <p>
            By disclosing the idea to the public, patent rights allow the
            inventor to get recognition in the market and enhance his portfolio.
            It then assists him in establishing positive relationships with
            clients and rival businesses, which eventually increases his
            earnings.
          </p>

          <h3>Exclusive rights</h3>
          <p>
            Benefits to inventors are started as soon as the patent is filed, or
            at the beginning of the patent registration process. As soon as the
            applicant files the Provisional Patent Application, he has
            protection and assurance that no other individual or business could
            claim ideas identical to his invention. In India, the filing time
            lasts for 12 months. If another person applies for the same patent,
            his request would be denied.
          </p>

          <h3>Economic Benefits</h3>
          <p>
            Patents have many positive economic effects. A patent makes it
            simple for the owner to profit from their creation because it can
            only be applied to new and inventive goods, procedures, or devices.
            If you have built a machine, you can license the rights to use it in
            a variety of businesses in exchange for money.{" "}
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default WhyPatent;
