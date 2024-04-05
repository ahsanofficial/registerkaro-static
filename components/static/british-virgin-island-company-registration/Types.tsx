import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/british-virgin-island-company-reg/Types_of_Companies_for.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Following are the types of company structures available in the BVI Law for the company registration: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Companies for Company Registration in British Virgin Island"
              className="Types-img w-100"
              height={700}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1. Company Limited by Shares: </strong>The most typical kind of business to be formed in the British Virgin Islands; it can issue shares, which are owned by its shareholders; its directors oversee daily operations; and Because of its shareholders' distinct legal personality, their liability is often restricted to the outstanding balance on those shares. </p>
           <p><strong>2. Restricted Purpose Company: </strong>Restricted Purpose Company is one such company that is limited by shares which must be registered at the time of creation. It is a special purpose vehicle having limited corporate ability to execute certain defined tasks. It is commonly used to hold certain assets in securitization and structured finance transactions. </p>
           <p><strong>3. Segregated portfolio Company: </strong>A segregated portfolio company is one such company which is governed by shares and the formal separation (also known as "ring fencing") of each portfolio's assets and liabilities from those of the other portfolios and the company.</p>
           <p><strong>4. Company Limited by Guarantee: </strong>A corporation limited by guarantee is available as either authorized to issue shares or not authorized to issue shares. it is generally (but not always) used for non-profit organizations; and both the guarantee members and shareholders have independent legal identity.</p>
           <p><strong>5. Unlimited Company: </strong>The corporation is permitted to issue an infinite number of shares as these companies can be found as authorized or unauthorized issuers of shares. Moreover, at least one member must be an unlimited member, meaning that person has unlimited accountability for the company's debts..</p>
        </div>
        
      </div>
    </div>
  );
};
