import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-product-approval/rules.svg";

const EarlierRules = () => {
  return (
    <div id="EarlierRules">
        <p className="main-para">The FSSAI introduced a product approval system to undertake a safety assessment of food products containing ingredients that do not have prescribed standards after implementing the FSSAI Act and the Regulations. However, continuing the product approval process for non-standardized food products or components was impossible without legitimate regulations. The product approval system for non-standardized food products/ingredients was discontinued on 26th August 2015.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <h3>To address the situation arising after the discontinuation of the product approval system, the FSSAI has introduced the following regulation:</h3>
            <p><strong>1. </strong>FSSAI revised the definition of proprietary food in the Food Safety and Standards (Food Product Standards and Food Additives) Ninth Amendment Regulations, 2016.</p>
            <p><strong>2. </strong>FSSAI introduced the Food Safety and Standards (Food or Health supplements, Nutraceuticals, Foods for specific dietary uses, Foods for medical purposes, Functional foods, and Novel foods) Regulations, 2016.</p>
            <p><strong>3. </strong>FSSAI notified the Food Safety and Standards (Food product Standards and Food Additives) Seventh Amendment Regulations, 2016, relating to harmonizing food additives.</p>
            <p><strong>4. </strong>Even after introducing the above Regulations, several food products or ingredients were not covered in any of the Regulations made under the FSSAI. To regulate such products or ingredients, FSSAI introduced the Food Safety and Standards (Approval of non-specified food and ingredients) Regulations, 2017.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Earlier Rules and Regulations for FSSAI Product Approval"
            className="EarlierRules-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default EarlierRules;


