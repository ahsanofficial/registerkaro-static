import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/fssai/benefits.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
    <p className='main-para'>To apply for IEC Registration online, the following prerequisites are required:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 '>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={250} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 '>
      <p>A valid PAN Card issued by the Income Tax Department of India is compulsory;</p>
      <p>The applicant must have a bank account in the firm’s name or individual, as IEC Certificate is issued in the applicant’s name;</p>
      <p>The business entity must be registered under the ROCs;</p>
      <p>The applicant needs to submit the vital documents to the DGFT office.</p>
      </div>
     </div>
      </div>
  )
}
