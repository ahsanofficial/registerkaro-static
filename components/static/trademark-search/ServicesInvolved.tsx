import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-search/A_description_of_products.svg";
interface HeroProps {
    cityName: string;
}
const ServicesInvolved = ({ cityName }: HeroProps) => {
  return (
    <div id="ServicesInvolved">
       <Image
            alt="A description of products/services Involved"
            className="ServicesInvolved-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
      <div className="benefits flex w-80 m-auto ">
        <div className="flex-7">
            <p><strong>1. Goods: </strong>This encompasses tangible products or items traded or manufactured. Goods can include a wide array of items such as electronics, apparel, food products, machinery, etc.</p>
            <p><strong>2. Services: </strong>These involve intangible offerings or activities provided by one entity to another. Services may include professional services (legal, medical), educational services, hospitality, IT services, etc.</p>
        </div>

      </div>
      <p className="main-para">In conducting a trademark search, specifying the products or services associated with the proposed trademark is essential. The Indian Trademarks Registry follows the Nice Classification system, categorizing goods and services into 45 classes for trademark registration.</p>
    </div>
  );
};

export default ServicesInvolved;


