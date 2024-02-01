import Image from 'next/image'
import React from 'react'
import vitalDocument from '../../../assets/images/llp-reg/vitalDocument.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentArrowWise w-80 m-auto' id='Documents'>
      <div className='flex justify-content-center'>
        <Image alt="The important checklist for LLP Registration in India" className="DocumentArrowWise-img w-100" loading="lazy" src={vitalDocument} />
      </div>
      <div className='flex-child-1'>
        <p>Following is the list of all the vital documents required for LLP Registration in India:</p>
        <h3>Documents of all the Partners:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card or Identity Proof of all the Partners:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address Proof of Partners:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Partners’ Residence Proof:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Passport sized-photos:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Passport:</li>
        </ul>
        <h3>Proof of Registered Office Address:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />If the registered office is taken on rent, an NOC & a Rent Agreement from the landlord has to be submitted. NOC will be the consent of the landlord to allow the LLP to use the place as a registered office.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Submit the latest utility bills like electricity, gas, telephone bill, etc. and the bill should contain the complete address of the premise & owner’s name & the document should not be older than 2 months.</li>
        </ul>
      </div>
    </div>
  )
}