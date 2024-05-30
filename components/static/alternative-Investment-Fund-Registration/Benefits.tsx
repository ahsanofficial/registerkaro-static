import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>1. </strong>Helps in having a diverse investment portfolio</p>
           <p><strong>2. </strong>Increases Chances of Higher Returns</p>
           <p><strong>3. </strong>Specialised Strategies to guide investment </p>
           <p><strong>4. </strong>Risk Management</p>
           <p><strong>5. </strong>Helps in Tax Savings</p>
           <p><strong>6. </strong>Option to Liquidity the returns or the assets</p>
           <p><strong>7. </strong>Managed by financial regulators of the government hence it can be trusted</p>


        </div>
        <div className="flex-4">
          <Image
            alt="Benifits"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
