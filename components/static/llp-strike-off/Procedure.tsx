import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Procedure = () => {
  return (
    <div id="Procedure">
      <div className="Procedure flex w-80 m-auto mobile-flex-column-reverse">  
        <div className="flex-6">
          <p><strong>1. </strong>LLPs that have not yet started a business or ceased any commercial activities must fill out LLP Form 24 when closing the LLP. Thus, the LLP needs to cease all business operations at the start if it is currently functioning or if the founders are seeking to close it down using the LLP closure process.</p>
          <p><strong>2. </strong>LLPs that have not begun any business or ceased any commercial activities must fill out LLP Form 24 when closing the LLP. Hence, the LLP must first cease all business operations if it is currently running or if the founders aim to close it down by following the LLP closure procedure.</p>
          <p><strong>3. </strong>Every Partner in the LLP must first sign the declaration, either together or individually, confirming that the Limited Liability Partnership has not commenced business operations or ceased any previous commercial activities as part of the process for closure. Furthermore, the LLP Partners must assert that the LLP is not liable, as any potential liability arising after the LLP's name is removed from the Register should be declared via the LLP striking off process. Form LLP 24 must still be used for processing Partners Liability even after closure of an LLP as part of the LLP striking off procedure.</p>
          <p><strong>4. </strong>The submission of Form LLP 24 is required as part of the LLP closure process, along with the LLP's deed and income tax return statement. If the LLP has not engaged in any commercial activity or submitted any income tax returns, the process of filing an income tax return statement is not required. Instead, an individual can also submit a recent income tax return with an acknowledgment when applying to close the LLP using the LLP closure process.</p>
          <p><strong>5. </strong>Following the LLP's formation, the agreement should be presented to the relevant MCA within 30 days of registration as a part of the LLP termination procedure. The initial LLP agreement should be submitted correctly even if it was drafted but not submitted, including any modifications, in case this requirement was overlooked during the LLP closure procedure. Moreover, any Form 8 and Form 11 returns that have not been filed and are overdue at the end of the last financial year, during which the LLP ceased its business operations, must be submitted along with LLP Form 24 when closing the LLP. </p>
          <p><strong>6. </strong>The LLP is required to continue operating its revenue-generating activities at the time it ceases commercial operations, and any post-cease date transactions do not contribute to its business operations.</p>
          <p><strong>7. </strong>Upon finishing the required paperwork for the dissolution of LLP, particularly the preparation of LLP Form 24, an account statement showing zero assets and liabilities must be obtained from a chartered accountant on or after the filing date of Form 24, and not more than 30 days prior to that date, as part of the necessary closure documents for LLP.</p>
          <p><strong>8. </strong>The MCA must be submitted along with the closure documents of LLP and LLP Form 24 to officially eliminate the name of the LLP. The Company's Registrar will send a detailed notice to announce the removal of the LLP's name on the MCA website during the application process if deemed appropriate. By submitting the form, the partner agrees to be responsible for any future liabilities and will be entitled to payment for any liabilities paid.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Procedure to Striking Off an LLP"
            className="Procedure-img w-100 Importance-img-h-100"
            height={1350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
