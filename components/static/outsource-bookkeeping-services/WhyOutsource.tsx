import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhyOutsource = () => {
  return (
    <div id="WhyOutsource">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="WhyOutsource-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Cost Effective: </strong>
            Outsourced bookkeeping Services are cost-effective process to choose
            as it helps optimize the company resources. The average cost for
            Outsourcing the entire range of bookkeeping costs is cheaper than
            that of the in-house team for the same.
          </p>

          <p>
            <strong>Technological advancement: </strong>
            When the bookkeeping is outsourced, the third party offering such
            services also offers technological advancement in their services,
            which further eases down the process of managing and organizing the
            bookkeeping-related tasks. This technological advancement is rare to
            implement for the in-house associates as it is quite expensive to
            bear.
          </p>

          <p>
            <strong>Smooth financial Management: </strong>
            The approach used in outsourced bookkeeping is quite advanced and
            qualitative, as such services are meant to be tailored to the nature
            of your business and the scope of your industry. The process is
            altered as per the customer’s needs, which is eventually meant to
            deliver higher quality than that of in-house services, and
            therefore, a smooth delivery of financial management.
          </p>

          <p>
            <strong>24×7 work frame: </strong>
            Outsourced bookkeeping is not managed only during office hours like
            9-5; it extends outside the working hour frames, creating
            flexibility for the customers and resulting in a higher level of
            satisfaction in the services rendered.
          </p>

          <p>
            <strong>Diversified experts: </strong>
            While outsourcing the bookkeeping services, you tend to find a pool
            of experts to offer you the best of services, which is hard to
            collect for the in-house team. The pool comprises experts trained
            with industry practices and skills required to offer world-class
            services.
          </p>

          <p>
            <strong>Mapping of Credits and Debits: </strong>
            Outsourced Bookkeeping helps the businesses to keep a track of the
            credits and debits to identify the growth graph along with the
            future growth projection. This helps in finding the flaws and cracks
            in the operations and eradication of the same helps in strengthening
            the operations.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default WhyOutsource;
