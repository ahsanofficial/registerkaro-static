import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-cfo-services/Functions_of_a_Virtual_CFO.svg";

const Functions = () => {
  return (
    <div id="Functions">
      <p className="main-para">
        Following are the Functions of a Virtual CFO in India:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Internal Control Development : </strong>
            The hierarchical top-down organizational structure and managerial
            deficiency that SMEs in India frequently experience is clear from
            their lax internal controls. The significance of implementing
            sufficient internal controls that support best practices and
            effectively reduce risk is not well understood by a significant
            portion of small business owners. A virtual CFO gives company owners
            the knowledge and skills they need to set up effective internal
            controls that improve resource management and boost operational
            effectiveness.
          </p>

          <p>
            <strong>Accurate Reporting : </strong>
            Ensuring that the balance sheet accurately reflects the company’s
            assets and liabilities is the responsibility of the virtual CFO, as
            this facilitates improved management and planning for the upcoming
            fiscal year. A virtual CFO’s job is to supervise the accounting or
            finance staff and make sure that the profit figures accurately
            represent the company’s performance for the given time frame.
          </p>

          <p>
            <strong>Financial base development : </strong>
            The CFO is now considered to be a member in a team of leaders rather
            than just acting as the financial gatekeeper. They are supposed to
            uphold and contribute a broad perspective on the company’s growth.
            They are in charge of establishing the company’s solid financial
            foundation, which is essential to the success of the entire
            organization.
          </p>

          <p>
            <strong>Operational forecasting : </strong>
            In order to generate a shared understanding of the performance,
            possibilities, and challenges of the organization, CFOs in larger
            organizations are expected to cultivate friendly connections with
            leaders of the various functions. A CFO is required to supervise
            many operations, including payroll, IT, HR, and so on, in a small
            and medium-sized enterprise (SME) where the leadership group
            consists solely of business owners or partners. The goal is to
            maximize overall cost savings while maintaining functional
            effectiveness.
          </p>

          <p>
            <strong>Financial Resources optimization : </strong>
            The majority of SMEs work in difficult conditions with fierce
            competition and restricted access to financing. Effective virtual
            CFO services can assist entrepreneurs in increasing both their top-
            and bottom-line revenue. A Virtual CFO can help SMEs expand into new
            markets and accelerate growth thanks to their extensive knowledge,
            broad experience, and great domain understanding. They can also have
            strong access to a network of professionals.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Functions of a Virtual CFO"
            className="Functions-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Functions;
