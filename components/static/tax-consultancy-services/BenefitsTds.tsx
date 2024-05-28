import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Benefits of TDS Return Filling.svg";

export const BenefitsTds = () => {
  return (
    <div id="BenefitsTds">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Benefits of TDS Return Filling"
              className="Importance-img-h-100 w-100"
              height={248}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
<p><strong>1. </strong>Consistent Revenue Stream for Government</p>
<p><strong>2. </strong>Efficient Tax Collection for Public Welfare</p>
<p><strong>3. </strong>Spread-out Payments throughout the Year</p>
<p><strong>4. </strong>Convenience of Online Filing</p>
<p><strong>5. </strong>Avoiding Penalties and Legal Issues</p>
<p><strong>6. </strong>Easy Monitoring of Refund Status</p>         
        </div>
        
      </div>
    </div>
  );
};
