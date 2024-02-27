import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentsRequired = () => {
  return (
    <div >
        
      <div className='flex justify-content-center' id='DocumentsRequired'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={382} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The documents required for plastic waste authorization vary from state to state and depend on the type and capacity of the plastic waste activities undertaken by the entity. However, some of the common documents are:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Certificate of incorporation or registration of the entity</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Proof of ownership or lease of the premises where the plastic waste activities are carried out</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of the machinery and equipment used for collection, storage, transport, processing, or recycling of plastic waste</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Environmental management plan, including the measures for pollution control, waste disposal, health and safety, etc.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Consent to establish and operate from the SPCB or UTPCC</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details and documents of the authorized person signing the papers, such as Aadhaar card, PAN card, and GST certificate</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of the products, including model numbers and import history</li>
          </ul>
        <ul className='tick list-unstyled'> 
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of the recycler, if any, with whom the entity has a contract or agreement.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}