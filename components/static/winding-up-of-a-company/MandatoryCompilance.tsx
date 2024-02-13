

import React, { useState } from 'react'
import Image from 'next/image'

import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const MandatoryCompilance = () => {


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
        <div className='flex justify-content-center'>
         <ul className='tick list-unstyled'>
         <p>The following conditions fall under the FTE (Fast Track exit) scheme, which allows companies to have their names removed off the ROC. The following types of businesses will be classified as defunct corporations, and as such, they are eligible to terminate their operations under a Fast Track exit plan.  These are the circumstances:</p>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Compulsory Winding up of Company by Tribunal</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Voluntary Winding up of the Company</li>
        </ul>
      </div>
    </div>
  )
  
}
