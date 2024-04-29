import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Why = () => {
  return (
    <div id="Why">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
      <div className="flex-3">
          <Image
            alt="Douments required:"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>

        <div className="flex-6 pt-2 ps-5  ">
            <p className="ps-5"> <strong>1. </strong> A copy of the import export code number certified by oneself, as approved by the relevant licensing authority.</p>
            <p className="ps-5"> <strong>2. </strong>An annual fee for membership must be paid by a demand draft, pay order, or check payable to the FIEO.</p>
            <p className="ps-5"> <strong>3. </strong>Official authorization document printed on the company's official stationery.</p>
            <p className="ps-5"><strong>4. </strong>A copy of the SSI registration certificate, industrial license, or IEM that has been self-certified.</p>
            <p className="ps-5"> <strong>5. </strong>A copy of the certificates for 1 to 5-star export houses, self-certified.</p>
            <p className="ps-5"> <strong>6. </strong>Director, partner, and owners must have a government-recognized ID.</p>
            <p className="ps-5"><strong>7. </strong>Goods and Services Tax Identification Number.</p>
            <p className="ps-5"><strong>8. </strong> Export earnings by country and/or product during the past three financial years.</p>
            <p className="ps-5"> <strong>9. </strong>A report of overseas revenue generated by service providers in the last three financial years.</p>
            

        </div>
        
      </div>
    </div>
  );
};
