import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/cancellation.svg"


export const Renewal = () => {
  return (
    <div id="PartnershipDeed">
    <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
              alt="Cancellation/Validity/Renewal of Service"
              className="Validity-img w-100"
              height={300}
              loading="lazy"
              src={bft}
            />
          
        </div>
        <div className="flex-5 mt-5">
          <p className='main-para my-2'id='Renewal'>The Registration Certificate’s validity ranges from 1 to 5 years, subject to renewal before expiration to maintain market access.</p>        
      </div>
    </div>
    </div>
  )
}