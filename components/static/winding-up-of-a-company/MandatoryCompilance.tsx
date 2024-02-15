

import React, { useState } from 'react'
import Image from 'next/image'

import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
import throughFTE from '../../../assets/images/winding-up-of-a-company/through-FTE.svg'

export const MandatoryCompilance = () => {


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
        <div className='flex justify-content-center'>
         <ul className='tick list-unstyled'>
         <div className='flex-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={520} loading="lazy" src={throughFTE} />
        </div>
         <p>The following conditions fall under the FTE (Fast Track exit) scheme, which allows companies to have their names removed off the ROC. The following types of businesses will be classified as defunct corporations, and as such, they are eligible to terminate their operations under a Fast Track exit plan.  These are the circumstances:</p>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Compulsory Winding up of Company by Tribunal</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Voluntary Winding up of the Company</li>
        </ul>
      </div>
    </div>
  )
  
}
