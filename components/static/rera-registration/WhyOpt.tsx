import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/rera-registration/Why_to_opt_for_RERA_Registration_Certificate.svg";

const WhyOpt = () => {
  return (
    <div id="WhyOpt">
      <p className="main-para">
        Opting for RERA Registration for your company opens door to many
        benefits such as:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-3">
          <p>
            <strong>Uniformity : </strong>
            According to the conditions of the RERA Registration, the company is
            accountable for all of the promises it made during project
            acquisition. If it is not followed appropriately, the owner also has
            the right to appeal to the broker or building company. The owner of
            the home is the recipient of duties from both the builder and the
            broker.
          </p>

          <p>
            <strong>Accountability : </strong>
            The company is liable for all of its promises made during project
            takeover under the terms of the RERA Registration. In addition, the
            owner has the right to protest to the broker or construction
            business if it is not followed correctly. Both the builder and the
            broker have obligations to the home’s owner.
          </p>

          <p>
            <strong>Transparency : </strong>
            The organization that is RERA-registered will be open and honest
            about every endeavor. The proprietor will be informed on a regular
            basis on the development of the project. Consequently, the
            construction company is required to comply by RERA Registration.
          </p>

          <p>
            <strong>Legal status & benefits : </strong>
            The RERA Registration for either the project or the company offers
            legals status to the same. When a legal status is granted to an
            organization or a project, it becomes eligible for enjoyment of the
            benefits that are offered under the legislation governing such
            bodies.
          </p>

          <p>
            <strong>Dispute/Grievance Resolution : </strong>
            The RERA Registration will also assist those working in this
            industry and registered to do so in resolving complaints resulting
            from projects. A distinct authority is instituted to settle
            disagreements between the involved parties.
          </p>

          <p>
            <strong>Quality Assurance : </strong>
            Typically, builders promise quality up front then fall short of
            expectations. Therefore, in accordance with the RERA Registration,
            the builder has agreed to maintain any defects discovered by buyers
            throughout the five years of possession at no cost to the builder.
            Additionally, the builder will face consequences. This will
            guarantee that the builder maintains high standards and produces the
            desired outcome.
          </p>

          <p>
            <strong>Tribunal institution : </strong>
            In an effort to better serve those who are dissatisfied with the
            directives and rulings made by the RERA Authority, the RERA also
            established an appeal tribunal. Therefore, the person who is harmed
            by the RERA authority’s decisions may file an additional appeal with
            the Appellate Tribunal.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Why to opt for RERA Registration Certificate?"
            className="WhyOpt-img w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyOpt;
