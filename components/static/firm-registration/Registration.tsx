import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const Registration = () => {
  return (
    <div id='Registration'>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
    
      <div className='flex-6 pt-5'>
        <p>Registration of a business as a firm requires a different set of compliances and processes, we will be discussing in detail how a firm is registered. For registration as a firm, there can be two business structures that are- a Limited Liability Partnership( LLP) and a Partnership. We will be further discussing in detail about these structures, documents required to register the firm, steps for registration as well as the benefits of registering a firm.</p>
      </div>
      <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="Registration-img w-100" height={200} loading="lazy" src={bft} />

      </div>
     </div>
    
      </div>
  )
}
