import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import who_is_not_eligible_for_startup_india from '../../../assets/images/static/startup_india_registration/who_is_not_eligible_for_startup_india.svg'

export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
        <div className='flex-3'>
        <Image alt="Who is not eligible for Startup India Registration or Startup India Recognition?, Sole Proprietorship, Firm constitute by the Notary Partnership Deed;" className="Checklist-img w-100" loading="lazy" height={450} src={who_is_not_eligible_for_startup_india} />
        </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Sole Proprietorship;" />
          </div>
          <p>Sole Proprietorship;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Firm constitute by the Notary Partnership Deed;" />
          </div>
          <p>Firm constitute by the Notary Partnership Deed;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Company is older than 10 years;" />
          </div>
          <p>Company is older than 10 years;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>If the annual turnover of the company is more than Rs. 100 crores.</p>
        </div>
      </div>
    </div>
  )
}