import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/fssai/who.svg'

export const OtherAnnual = () => {
  return (
    <div id='OtherAnnual'>
      <p className='main-para'>To be eligible for ESI Registration in India, you must have more than 10 employees or workers. In some areas, ESI Registration is possible for establishments only if there are more than 20 employees. The following are some criteria that need to be satisfied for obtain ESI Registration:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={400} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
     
      <p><strong>1: </strong>The establishment is registered with the EPFO;</p>
      <p><strong>2: </strong>The total contribution to ESI is 6.5% of the gross salary & it can be further divided as:</p>
      <p>1.75% of the employees.</p>
      <p>4.75% by the employer.</p>
      <p><strong>4: </strong>An employee whose gross salary is up to Rs. 21,000/month can avail of this with the employer’s help;</p>
      <p><strong>5: </strong>For industrial units where there are chances of occurrence of health issues or injury all the employees with a salary less than Rs. 21,000 compulsorily need to get ESI Registration.</p>
     
      </div>
     </div>
    </div>
  )
}