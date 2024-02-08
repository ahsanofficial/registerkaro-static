import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/nidhi-reg/Procedure.svg'
export const DocRequired = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='DocRequired'>
      <div className='flex-5'>
        <div className='flex-3'>
        <p>Following is the documents required for Startup India Company Registration:</p>
      </div>

        <p><strong>1: </strong>CoI or Certificate of Incorporation;</p>
        <p><strong>2: </strong>MoA (Memorandum of Association) & AoA (Articles of Association);</p>
        <p><strong>3: </strong>List of all designated Directors and Partners;</p>
        <p><strong>4: </strong>Contact details of all the Directors or Partners;</p>
        <p><strong>5: </strong>Latest Photos of all the Directors and Partners;</p>
        <p><strong>6: </strong>Details regarding the amount of investment and investors;</p>
        <p><strong>7: </strong>Details of IPR Registration;</p>
        <p><strong>8: </strong>Website or Mobile App link (if any);</p>
        <p><strong>9: </strong>Growth Plan and Business Plan;</p>
        <p><strong>10: </strong>Udyam Registration or MSME Registration;</p>
        <p><strong>11: </strong>Brief write-up on how the business is working towards (innovation in the industry, high potential for wealth creation, potential for employment generation).</p>
        
      </div>
      <div className='flex-3'><Image alt="Private Limited Company sample" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} /></div>
    </div>
  )
}