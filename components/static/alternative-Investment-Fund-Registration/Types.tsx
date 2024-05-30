import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Application under AIF can be made under different categories, following are the categories:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Categories"
              className="Importance-img-h-100 w-100"
              height={500}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>Category I:</strong>In this category investment in early-stage ventures, in small-scale or medium-scale enterprises that are considered economically or socially desirable by the government of India or any other financial regulator in the country since they are considered to have a butterfly effect in terms of return on investment. It constitutes low risk and row returns.</p>
           <p><strong>Category II:</strong>In this category, they typically involve a wider range of investments like private equity, real estate investments and structured credit investments, they do not fall under categories I and III in terms of return on investment, not too risky not too safe. These investments are done with diverse balanced return intentions kept in mind. Here there is not much compliance other than normal reporting to the regulatory body.</p>
           <p><strong>Category III:</strong> These investments are made with the intention of short-term returns, they are considered in higher risk or return. They have no specific rate of return on investment. They are generally done on hedge or arbitrage funds.</p>
        
        </div>
        
      </div>
    </div>
  );
};
