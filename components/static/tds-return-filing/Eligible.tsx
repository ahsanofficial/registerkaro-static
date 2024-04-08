import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/tds-return-filing/one.svg";

const Eligible = () => {
  return (
    <div id="Eligible">
        <p className="main-para">If you are looking forward to knowing more about TDS returns or TDS Filing, then before anything, it is important to check whether you are eligible for a TDS Return or not. Following are certain criteria to check the eligibility for the TDS Return or TDS Filing.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>An Individual, group of Individuals, Association of Individuals, Limited Companies, Hindu United Families, local Authorities, partnership firms, etc., are eligible to be deductors for TDS Return.</p>
            <p><strong>2. </strong>According to the Income Tax Act, TDS Return Filing is done against pay-outs like Salary Income, Insurance Commission, Income on Securities, Income on Lottery winning, Horse Race winning, payout towards NSC, etc.</p>
            <p><strong>3. </strong>Employers or organizations with valid TANs are eligible to file TDS returns.</p>
            <p><strong>4. </strong>Individuals with accounts that are audited as per Section 44AB and hold an office under the governmental or company authority are eligible to file online TDS returns each quarter.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Are you eligible for a TDS Return?"
            className="Eligible-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Eligible;


