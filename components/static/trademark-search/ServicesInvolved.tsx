import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ServicesInvolved = () => {
  return (
    <div id="ServicesInvolved">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. Goods: </strong>This encompasses tangible products or items traded or manufactured. Goods can include a wide array of items such as electronics, apparel, food products, machinery, etc.</p>
            <p><strong>2. Services: </strong>These involve intangible offerings or activities provided by one entity to another. Services may include professional services (legal, medical), educational services, hospitality, IT services, etc.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="ServicesInvolved-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">In conducting a trademark search, specifying the products or services associated with the proposed trademark is essential. The Indian Trademarks Registry follows the Nice Classification system, categorizing goods and services into 45 classes for trademark registration.</p>
    </div>
  );
};

export default ServicesInvolved;


