import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/isi-mark-certification/Primary_Objectives_of_ISI_Certification.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
    
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
       
      <div className='flex-7 pt-5'>
      <p><strong>1. </strong>Enhance customer satisfaction and business goodwill.</p>
      <p><strong>2. </strong>Minimize production costs by reducing resource wastage.</p>
      <p><strong>3. </strong>Ensure the delivery of high-quality products to consumers.</p>
      <p><strong>4. </strong>Foster better growth prospects for businesses.</p>
      <p><strong>5. </strong>Guarantee the safety and quality of products.</p>
      <p><strong>6. </strong>Mitigate product rejections.</p>
     
      </div>
      <div className='flex-4 mt-2'>
          <Image alt="Primary Objectives of ISI Certification" className="Primary-img w-100" height={350} loading="lazy" src={bft} />
      </div>
     </div>
      </div>
  )
}
