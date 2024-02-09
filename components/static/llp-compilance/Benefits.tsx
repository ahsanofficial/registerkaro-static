
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Benefits = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
      <p className='main-para mb-2'>Following are some benefits of LLP Compliance in India:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Easy Closer and Conversion of LLP</h3>
            <p>
              For the LLP Conversion into any other organization or company, annual filing is very important. Regular compliance records ease the conversion task. The same applies in the case of LLP Closure. Even if the Limited Liability Partnership was non-operational, the Registrar may ask to fulfill LLP Compliance, with an additional LLP filing fee (if applicable).
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Avoid Penalties</h3>
            <p>
              With an intention to avoid huge penalties & fees, regular filing of forms protects Partners from being declared as defaulters. It also avoids further disqualification of contracts. Hence, Limited Liability Partnership needs to fulfill the Annual Compliance requirements. The non-fulfillment of LLP Compliance adds up in the form of heavy penalties till the actual date of filing.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: High Credibility</h3>
            <p>
              Legal Compliance is the main requirement for any business in India. The status of the LLP Annual filing is shown in the Master Data of the Limited Liability Partnership on the MCA portal & any individual can access the same. For loan approvals or any other requirements, compliance is a primary criterion to measure the Company’s Credibility.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Financial Worth Record</h3>
            <p>
              The Forms filed by the Limited Liability Partnership are accessible by Companies. Hence, while entering into major projects or contracts, the concerned party may also inspect the financial worth. The annual filing provides its financial worth record & capacity to an interested individual or party.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Greater Reputation</h3>
            <p>
              A vital requirement for any company is legal compliance. Anyone can access the Master Data of the LLP on the MCA portal to check the current status of the LLP Annual Filing. Compliance is a key factor in determining how trustworthy an organization or a Company is when approving loans or other needs of a similar nature.
            </p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Easy Closer and Conversion of LLP</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Avoid Penalties</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>High Credibility</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Financial Worth Record</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Greater Reputation</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
