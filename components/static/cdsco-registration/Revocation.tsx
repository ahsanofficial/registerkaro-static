import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/cancellation.svg"


export const Revocation = () => {
  return (
    <div id="Revocation">
    <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
    <div className="flex-5 mt-5">
        <p className='main-para my-2'>CDSCO holds the authority to cancel, suspend, or revoke the Registration Certificate due to non-compliance, safety concerns, or inadequate surveillance.</p>        
      </div>
      <div className="flex-3">
        <Image
              alt="Cancellation/Suspension/Revocation of Service"
              className="Suspension-img w-100"
              height={300}
              loading="lazy"
              src={bft}
            />
        </div>
       
    </div>
    </div>
  )
}