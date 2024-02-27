import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
     <p className='main-para mb-2'>Here’s an overview of the CDSCO registration process in India:</p>
     <p className='main-para mb-2'>CDSCO oversees the evaluation, approval, and regulation of drugs, medical devices, cosmetics, and diagnostics to ensure their safety, efficacy, and quality before being made available in the Indian market.</p>
     <p className='main-para mb-2'>Manufacturers, importers, or their authorized representatives are typically involved in applying for registration to market their products in India.</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={350} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1: Submission of Application: </strong>Manufacturers submit applications containing comprehensive details about the product, manufacturing process, quality management systems, clinical data (if applicable), and other relevant information to CDSCO.</p>
      <p><strong>2: Evaluation and Review: </strong>CDSCO conducts a thorough review of the submitted documents, assessing compliance with regulatory requirements, safety, efficacy, and quality standards.</p>
      <p><strong>3: Query Resolution: </strong>If necessary, CDSCO may request additional information or clarification from the applicant to complete the evaluation.</p>
      <p><strong>4: Approval or Rejection: </strong>Upon satisfactory evaluation, CDSCO approve for marketing the product in India. In case of non-compliance or inadequate documentation, the application may be rejected.</p>
      <p><strong>5: Issuance of Registration: </strong>Successful applicants receive a Registration Certificate (RC) from CDSCO, allowing them to market and distribute their product in India.</p>
      </div>
     </div>
      </div>
  )
}
