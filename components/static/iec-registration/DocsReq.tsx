import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const DocsReq = () => {
  return (
    <div id='DocsReq'>
    <p className='main-para'>The following are the documents required for IEC Registration in India:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
       
      <div className='flex-7 '>
      <p>Copy of PAN Card of an individual, firm, or Company;</p>
      <p>Cancel cheque copies of current bank accounts of an individual, firm, or Company;</p>
      <p>Copy of rent or lease agreement or electricity bill copy of the premise;</p>
      <p>Aadhar Card, Voter id, or passport copy of an individual;</p>
      <p>A self-addressed envelope for delivery of IEC Certificate by registered post.</p>
      </div>
      <div className='flex-4 '>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={250} loading="lazy" src={bft} />

      </div>
     </div>
      </div>
  )
}
