import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-cfo-services/Virtual_CFO_for_all.svg";

const Virtual = () => {
  return (
    <div id="Virtual">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>For Start-ups : </strong>
            CFO support has become the need of hour or any business be it a
            bigshot company or a year-old start-up. If you want to ace this
            competitive Indian Market, availing CFO services is as essential as
            like any other tangent of the business. Because of the growing
            rivalry and development of digital business, the idea of a virtual
            CFO is novel and cutting edge. Without CFO support, it is far more
            difficult for start-ups or small businesses to remain competitive in
            the market, and recruiting internal staff is far more costly for
            small businesses. A start-up can obtain a skilled and experienced
            CFO professional at a relatively low cost by hiring a Virtual CFO
            Service. Nowadays, the majority of startups are using outsourced CFO
            services to expand significantly within the industry.
          </p>

          <p>
            <strong>For MSMEs : </strong>A particular emphasis has been placed on
            micro, small, and medium-sized firms (MSMEs) in the manufacturing
            and service sectors, which make up a sizable portion of the Indian
            economy. It is anticipated that the post-COVID era will be the MSME
            golden age in the nation. Despite having excellent potential, a lot
            of MSME businesses fail because of inadequate financial management,
            a lack of mentors or industry expertise, and a lack of decision
            makers. With the use of a success-based methodology and
            industry-specific financial, legal, and professional assistance, a
            virtual CFO service can effectively identify the issues facing a
            micro, small, and medium-sized enterprise (MSME). The corporation
            can concentrate on its main operation by assigning a virtual CFO to
            handle all of its management duties.
          </p>

          <p>
            <strong>For multidimensional Businesses : </strong>
            Even if the business is well established, and now looking to expand
            into multiple dimensions of the market, Virtual CFO is something not
            to be missed upon at such a crucial step. Virtual CFO helps is
            maintaining and optimizing the resources of a company to the best
            manner in its expansion. It helps in covering all sorts of risk to
            avoid any monetary damage in the expansion process. Virtual CFO also
            assists in minimizing the factors causing financial shrinkage to the
            business when entered into multi-dimensional zone.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Virtual CFO for all"
            className="Virtual-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
