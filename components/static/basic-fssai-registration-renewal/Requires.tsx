import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Requires = () => {
  return (
    <div id="Requires">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>There are many Food Business Operators who need FSSAI Renewal License. Some of them are Hotels, Manufacturing, Procurement, Distribution, Processing, Packaging, Storage, Wholesaler, Restaurants, Food Chains, Food sellers and resellers,  Processing food business like pickle and dry fruit maker, Dairy and dairy processing, Raw material suppliers used for food businesses, Food importers and exporters, Transporters who shift food items from one place to another, Retailers & establishments who have a retail food outlet, Canteens in corporations, hospitals, schools, colleges, or government institutions and so on.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Requires-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Requires;


