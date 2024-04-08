import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/income-tax-filing-online/Different_Types_of.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        <p className="main-para">In {cityName}, various types of Income Tax Return (ITR) forms are available to cater to the diverse financial situations of taxpayers. Each form is designed to capture specific income sources and financial activities. Here are some commonly used ITR forms along with brief explanations:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7 pt-5">
           <p><strong>1. ITR-1 (Sahaj): </strong> Applicable for individuals with income from salary, one house property, other sources (interest, etc.), and having total income up to Rs. 50 lakh. Not for individuals with income from business or profession.</p>
           <p><strong>2. ITR-2: </strong> For individuals and Hindu Undivided Families (HUFs) having income from sources other than business or profession. Suitable for those with income from capital gains, multiple house properties, and foreign income.</p>
           <p><strong>3. ITR-3:  </strong>Applicable for individuals and HUFs having income from business or profession. It includes provisions for reporting partnership firm income.</p>
           <p><strong>4. ITR-4 (Sugam): </strong> Suited for individuals, HUFs, and firms (other than LLP) having income from business or profession computed under the presumptive income scheme. Presumptive income is calculated as a percentage of turnover.</p>
           <p><strong>5. ITR-5: </strong> Applicable for LLPs (Limited Liability Partnerships), Association of Persons (AOPs), Body of Individuals (BOIs), and partnership firms.</p>
           <p><strong>6. ITR-6: </strong> For companies other than those claiming exemption under section 11 (income from property held for charitable or religious purposes).</p>
           <p><strong>7. ITR-7: </strong> Applicable for persons, including companies, who are required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D).</p>
           <p><strong>8. ITR-8: </strong> ITR-8 is used by companies that are required to furnish return under Section 139(1) and have income under the head “Profits and gains from business or profession” chargeable to tax at corporate tax rates.</p>
        </div>
        <div className="flex-4">
            <Image
              alt="Different Types of ITR Forms in India"
              className="Types-img w-100"
              height={800}
              loading="lazy"
              src={bft}
            />
        </div>
      </div>
    </div>
  );
};
