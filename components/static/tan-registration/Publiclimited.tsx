import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-Registration/Characteristics of TAN Registration_.svg";

export const Publiclimited = () => {
  return (
    <div id="publiclimited">
      <p className="main-para" style={{ textAlign: "left" }}>An essential tool for individuals in charge of withholding or collecting taxes at source is the Tax Deduction and Collection Account Number (TAN). The key components of TAN registration are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7 pt-3">
            <p><strong>1. Lifetime Validity:</strong> A TAN is good for as long as it is obtained. This implies that organizations or people are exempt from the need to periodically renew or reapply for it.</p>
            <p><strong>2. Essential for TDS Remittances: </strong>The TAN needs to be quoted when paying Tax Deducted at Source (TDS) to a bank that has been approved. Banks won't accept your TDS deposits if you don't have a TAN.</p>
            <p><strong>3. Proprietor Requirement:</strong> If an individual is obligated to deduct taxes at the source, they must obtain a TAN, even if they are operating a single proprietorship. This emphasizes how crucial TAN is for small business owners as well as for larger organizations.</p>

            <p><strong>4. Unique Identifier: </strong>The 10-character alphanumeric code known as TAN is unique. The Income Tax Department has created this special identification number just for people or organizations in charge of withholding or collecting taxes at the source.</p>


        </div>
        <div className="flex-5">
          <Image
            alt="Characteristics of TAN Registration:"
            className="Importance-img-h-100 w-100"
            height={490}
            loading="lazy"
            src={dft}
          />
        </div>
        
      </div>
    </div>
  );
};