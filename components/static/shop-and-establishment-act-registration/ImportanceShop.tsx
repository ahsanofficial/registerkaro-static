import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'

export const ImportanceShop = () => {
  return (
    <div className='checklist' id='ImportanceShop'>
        <div className='flex-3'>
        </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Sole Proprietorship;" />
          </div>
          <p>To stop child labour;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Firm constitute by the Notary Partnership Deed;" />
          </div>
          <p>To convert unorganised sector into organised;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Company is older than 10 years;" />
          </div>
          <p>To impose rules based on local culture & empower states;</p>
        </div>
      
        </div>
        <div className="checklist flex w-80 m-auto mobile-flex-column">

        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>To regulate employees’ wages;</p>
        </div>

        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>Maintain a healthy working environment.</p>
        </div>
      </div>
    </div>
  )
}