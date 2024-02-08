import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/pvt-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
import ProcedureReg from '../../../assets/images/nidhi-reg/Procedure.svg'
export const TypeOfSubs = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='TypeOfSubs'>
      <div className='flex-5'>
        <div className='flex-3'>
        <p>Following are the objectives of Startup India Movement:</p>
      </div>

        <p><strong>1: </strong>Enhanced Infrastructure, including incubation centers;</p>
        <p><strong>2: </strong>IPR facilitation;</p>
        <p><strong>3: </strong>A goal to increase the funding opportunities;</p>
        <p><strong>4: </strong>Provide an extensive networking database for the entrepreneurs & other stakeholders in the startup ecosystem;</p>
        <p><strong>5: </strong>The better regulatory environment including the tax benefits, easier compliance improved establishing a Company, fastest mechanism & more.</p>   
      </div>
      <div className='flex-3'><Image alt="Private Limited Company sample" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} /></div>
    </div>
  )
}