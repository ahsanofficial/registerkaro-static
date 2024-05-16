import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsic-registration/Benefits_of_NSIC.svg";
interface HeroProps {
    cityName: string;
}
const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
        <p className="main-para">NSIC Registration brings a wide range of benefits for the entities to enjoy under the domain. Few of such benefits are as follows-</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-3">
            <p><strong>1. </strong>Free issuance of the tender sets; </p>
            <p><strong>2. </strong>waiver of the need to pay an earnest money deposit (EMD); </p>
            <p><strong>3. </strong>Participating MSEs in the tender who quote prices within the L1+15 percent price band may also supply up to 25% of the requirement by lowering their prices to L1 price, provided that L1 is made up of non-MSEs. </p>
            <p><strong>4. </strong>Every Central Ministry, Department, and PSU must set an annual target of acquiring at least 25% of the total amount of goods and services produced or provided by MSEs.</p>
            <p><strong>5. </strong>Three percent goes toward units owned by women entrepreneurs, and four percent goes toward units owned by Schedule Caste/Schedule Tribes, out of the yearly minimum of twenty-five percent procurement from MSEs. </p>
            <p><strong>6. </strong>358 products are only available for purchase at SSI Sector.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Benefits of NSIC Registration"
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


