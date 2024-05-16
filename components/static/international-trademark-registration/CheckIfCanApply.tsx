import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/static/international-trademark-registration/Check if you can apply for the International Trademark Registration.svg";

export const CheckIfCanApply = () => {
  return (
    <div id='CheckIfCanApply'>
      <p className='main-para'>If you fall to be one among the following, then you are eligible for the International Trademark Registration:</p>
      <div className="checkIfCanApply flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-4">
          <Image
            alt="Check if you can apply for the International Trademark Registration"
            className="CheckIfCanApply-img w-100"
            height={240}
            loading="lazy"
            src={bft}
          />
          <div className="flex-7">
          <p><strong>1. </strong>Any person or national of a nation that is a party to an agreement or protocol may apply for international registration.</p>
          <p><strong>2. </strong>Any natural person or legal entity that resides in a nation covered by one of the treaties or has a legitimate and operational industrial or commercial presence there may apply.</p>
          <p><strong>3. </strong>According to the Agreement, a registration must serve as the foundation for an application for worldwide registration.</p>
        </div>
        </div>   
      </div>
    </div>
  )
}
