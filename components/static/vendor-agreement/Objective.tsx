import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/vendor-agreement/onetwo.svg";

const Objective = () => {
  return (
    <div id="Objective">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>The guidelines for a company and its provider are outlined in a vendor agreement. It specifies what the vendor will provide, the price, and the estimated delivery date. The agreement also specifies what is expectation of both parties and how disputes will be resolved. A well-written vendor agreement protects the interests of the vendor and the business by preventing misunderstandings and difficulties.
</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Objective of Vendor's Agreement"
            className="Importance-img-h-100 w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Objective;


