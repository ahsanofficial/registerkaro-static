import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/fssai/benefits.svg'

export const Exemption = () => {
  return (
    <div id='Exemption'>
   
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
       
      <div className='flex-7 '>
      <p>Individuals undertaking Import & Export in India for personal reasons & not associated with trade, manufacture & agriculture;</p>
      <p>The individuals or parties who import or export products to or from Nepal & Myanmar with a single consignment must not exceed the value of Rs. 25,000 via Indo-Myanmar border areas & China (through Gunji, Namgaya, Shipkila & Nathula ports);</p>
      <p>Departments or Ministries of Central & State Governments;</p>
      <p>As listed in Appendix-3, Schedule 2 of ITC, exemption from getting Import Export Code shall not be applicable for export of materials, special chemicals, equipment and technologies (SCOMET).</p>
      </div>
      <div className='flex-4 '>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={250} loading="lazy" src={bft} />
      </div>
     </div>
      </div>
  )
}
