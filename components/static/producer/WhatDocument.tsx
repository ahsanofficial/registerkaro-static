import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import eight from '../../../assets/images/pvt-reg/HowToRegister/eight.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import DIN from '../../../assets/images/pvt-reg/document/DIN.png'
import DSC from '../../../assets/images/pvt-reg/document/DSC.svg'
import PAN from '../../../assets/images/pvt-reg/document/PAN.png'
import TAN from '../../../assets/images/pvt-reg/document/TAN.webp'
import MOA from '../../../assets/images/pvt-reg/document/MOA.webp'
import AOA from '../../../assets/images/pvt-reg/document/AOA.webp'
import COI from '../../../assets/images/pvt-reg/document/COI.webp'
import MD from '../../../assets/images/pvt-reg/document/MD.png'

export const WhatDocument = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhatDocuments'>
    <p className='main-para mb-0'>Basically, there are 2 important compliance for Producer Company in India and following are 2 Producer Company Compliance:</p>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
          <div>
            <Image src={one} alt="one" loading="lazy" width={30} height={30} /> &nbsp; Annual Report by Auditor
          </div>
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
          <div>
            <Image src={two} alt="two" loading="lazy" width={30} height={30} /> &nbsp; Internal Audit
          </div>
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
        </button>
      </div>
      <div className='flex-5 text-justify fs-20'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <p>Annual Report by Auditor: NDH-3 is a half-yearly return filed to check whether the Company is working under the prescribed rules or not. This Return is to be filed by 30th Sep & 31st Mar each year.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <p>Internal Audit: This will be conducted at regular intervals by a CS, CA, Advocate, or CMA as per the AoA.</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
