import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const FactsCsr = () => {
  return (
    <div id="FactsCsr">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            A company formed according to section 8 of the Act, or a public
            trust or society registered under sections 12A and 80G of the Income
            Tax Act, 1961 (43 of 1961), set up by the company alone or jointly
            with another company. A business set up according to section 8 of
            the Act, or a trust or society registered by either the Central
            Government or State Government. Any organization formed by a law
            passed by Parliament or a State legislative body or an entity formed
            according to section 8 of the Act, a certified public trust or
            society, registered under section 12A and 80G of the Income Tax Act,
            1961, with a proven history of at least three years in carrying out
            comparable tasks. All entities mentioned in sub-rule (1) must
            register with the Central Government by submitting form CSR-1
            electronically to the Registrar, starting from April 1, 2021, if
            they plan to engage in any CSR activities.
          </p>
          <p>
            Signing up for CSR-1, the online platform for corporate social
            responsibility in India, offers numerous advantages. Above all, it
            offers a single location for all the necessary information and
            resources for NGOs to meet the CSR obligations outlined in the
            Companies Act. This comprises an extensive repository of accredited
            NGOs, along with information on upcoming CSR bids and initiatives.
          </p>
          <p>
            Further, CSR-1 provides various additional services to its members,
            including training and development programs, access to exclusive
            research reports, and opportunities to connect with other NGOs in
            related sectors. Members are eligible for discounts on CSR-related
            products and services provided by partner organizations.
          </p>
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

export default FactsCsr;
