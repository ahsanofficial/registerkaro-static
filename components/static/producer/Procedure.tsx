import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/nidhi-reg/Procedure.svg'

export const Procedure = () => {
  return (
    <div className='Procedure  flex w-80 m-auto mobile-flex-column-reverse' id='What'>
      <div className='flex-7'>
        <p>Following is the step-by-step procedure for Producer Company Registration:</p>
        <p><strong>Step 1:</strong></p>
        <p>Obtain DSC: First, you need to obtain a DSC (Digital Signature Certificate), it is vital for signing the digital incorporation application.</p>
        <p><strong>Step 2:</strong></p>
        <p>Choose a Unique Company Name: Then, you need to choose a unique name for your Company that aligns with the set name availability guidelines. At the time of the Producer Company Registration process, list your chosen names in the SPICe+ Part-A Form.</p>
        <p><strong>Step 3:</strong></p>
        <p>Prepare all Requisite Documents: Once your Company Name is approved, then the next step is to prepare all the vital documents for Company Registration. At this step, MoA, AoA, INC-9, INC-10, DIR-2, etc., are prepared & shared for signature.</p>
        <p><strong>Step 4:</strong></p>
        <p>File for Incorporation: Once all the vital documents are signed by the promoters then the next step is to file the Incorporation Form with SPICe+ INC-32 Form.</p>
        <p><strong>Step 5:</strong></p>
        <p>Follow up and Approval: Once you have filed for the Registration, then the next step is to follow up with the Government. If all your Documents and application are fine then the Government will issue the Registration Certificate.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Producer Company Registration Procedure" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} />
      </div>
    </div>

  )
}