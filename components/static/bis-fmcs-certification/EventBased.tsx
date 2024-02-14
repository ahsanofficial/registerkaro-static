import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/fssai/benefits.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
     <p className='main-para mb-2'>Foreign manufacturers intending to export their products to India must adhere to the following prerequisites</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={550} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1: Geographical Location: </strong>The manufacturing units should be situated outside of India.</p>
      <p><strong>2: Acceptance of License Terms & Conditions: </strong>The foreign manufacturer or company must acknowledge and comply with the terms and conditions outlined in the license.</p>
      <p><strong>3: In-House Testing Facilities: </strong>The presence of in-house labs equipped with product testing and quality control personnel is imperative to conduct tests in accordance with Indian Standards Specifications (ISS).</p>
      <p><strong>4: Conformance to Indian Standards: </strong>Ensure that the products align with the relevant Indian Standards Specifications, demonstrating conformity to the stipulated norms.</p>
      <p><strong>5: Acceptance of Inspection and Testing Scheme: </strong>Manufacturers should accept the Scheme of Inspection and Testing (SIT) along with the annual marking fee.</p>
      <p><strong>6: Availability of Manufacturing Machinery and Testing Facilities: </strong>Adequate manufacturing machinery and testing facilities must be available at the factory units to uphold the standards of production and testing.</p>
      </div>
     </div>
      </div>
  )
}
