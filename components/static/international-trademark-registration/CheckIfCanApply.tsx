import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const CheckIfCanApply = () => {
  return (
    <div id='CheckIfCanApply'>
      <div className="checkIfCanApply flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Check if you can apply for the International Trademark Registration"
            className="CheckIfCanApply-img w-100"
            height={200}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>If you fall to be one among the following, then you are eligible for the International Trademark Registration:</p>
          <ul>
            <li>Any person or national of a nation that is a party to an agreement or protocol may apply for international registration.</li>
            <li>Any natural person or legal entity that resides in a nation covered by one of the treaties or has a legitimate and operational industrial or commercial presence there may apply.</li>
            <li>According to the Agreement, a registration must serve as the foundation for an application for worldwide registration.</li>
          </ul>
        </div>        
      </div>      
    </div>
  )
}
