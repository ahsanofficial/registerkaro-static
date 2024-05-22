import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/bee-registration/two.svg";

export const Penalty = () => {
  return (
    <div id="Penalty">
      <p className="main-para">The goal of the fine for failing to comply with the BEE star label requirement is to prevent manufacturers from mislabeling their goods and to guarantee that buyers are provided with accurate information regarding the energy efficiency of the goods they are purchasing.</p>
      <p className="main-para">The following are some particular sanctions that may be applied for failing to comply with the BEE star labeling requirements:</p>
      <div className="penalty flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong>A fine of up to Rs. 1 lakh is possible for the first offense.</p>
          <p><strong>2. </strong>There is a maximum fine of Rs. 2 lakh for the second offense.</p>
          <p><strong>3. </strong>There is a maximum fine of Rs. 5 lakh for the third and consecutive offenses.</p>
          <p><strong>4. </strong>Give the maker a notice to show cause.</p>
          <p><strong>5. </strong>Revoke or suspend the manufacturer's authorization to market goods in India.</p>
          <p><strong>6. </strong>Publish the name of the manufacturer in the BEE’s website.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Penalty for Non- compliance with BEE guidelines"
            className="Penalty-img w-100 Importance-img-h-100"
            height={310}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
