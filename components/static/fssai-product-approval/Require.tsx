import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-product-approval/Which_Food_products.svg";

const Require = () => {
  return (
    <div id="Require">
        <p className="main-para">Food products inclusive of food ingredients or food additives for which there are no standards notified by FSSAI will require products approval. However, recently FSSAI has tried to include many categories of food products eligible for approval.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Which Food products require product approval?"
            className="Require-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-3">
            <h3>Some of these include:</h3>
            <p><strong>1. </strong>Health Supplements.</p>
            <p><strong>2. </strong>Nutraceuticals.</p>
            <p><strong>3. </strong>Foods for Special Dietary uses</p>
            <p><strong>4. </strong>Foods for special Medical purpose</p>
            <p><strong>5. </strong>Speciality foods containing or botanicals.</p>
            <p><strong>6. </strong>Foods containing probiotics.</p>
            <p><strong>7. </strong>Foods containing prebiotics.</p>
            <p><strong>8. </strong>Novel foods.</p>
            <p><strong>9. </strong>Products/ingredients which are new</p>
            <p><strong>10. </strong>Proprietary products/ingredients.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Require;


