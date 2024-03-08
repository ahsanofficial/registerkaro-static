import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/pvt-reg/benefit.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocsREquired = () => {
  return (
    <div >
        
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p><strong>After the ESI Registration under ESIC, the establishment needs to comply with the following:</strong></p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Maintaining a complete register of wages for workers;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Maintaining the attendance register;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Maintaining a register that records any accidents that happened on the premises;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Inspection book;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Monthly return & challan within 15th of the succeeding month.</li>
        </ul>
        <p><strong>After the ESI Registration, the employers must file ESI Returns half-yearly. The following are the documents required for filing ESI Returns:</strong></p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Form 6 – Register;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Monthly Returns & Challans;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Attendance Register of the employees;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Register of wages</li>
          </ul>
      </div>
      <div className='flex justify-content-center' id='DocsREquired'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={450} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
}