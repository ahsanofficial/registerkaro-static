import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const AdvantagesShop = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='AdvantagesShop'>
      <p className='main-para'>Following is the list of benefits that you can avail after getting Shop and Establishment Act Registration:</p>
      
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
         <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Provides Legal Protection:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={two} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Avoid unethical business practice:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={three} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Business Expansion:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={four} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Avail Government Schemes and Subsidies:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={five} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Ease of opening Current bank account of the business:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
        </div>
      <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Provides Legal Protection:</h3>
            <p>This Licence provides legal protection to the business and its employees. It also ensures that the business is following all the labour laws and regulations, and protects employees from exploitation & unfair treatment.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Avoid unethical business practice:</h3>
            <p>Child labour is very common in the unorganized sector. Despite a law prohibiting such activities, adolescents can be found working in a number of industries for extremely low rates from a café to a fabrication industry. The Shop & Establishment Act includes some strong anti-child labour regulations.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Business Expansion:</h3>
            <p>Essentially, an owner of the business who devotes 100% to the Shop Act’s requirements will be able to enjoy unanticipated rewards in the long term. The Shop and Establishment Act gives an entity or a company a legal status, allowing the business owner to have better exposure to a neglected part of the market over time.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Avail Government Schemes and Subsidies:</h3>
            <p>Many Government subsidies & schemes are available only to businesses that have a valid Shop & Establishment License. Businesses that have Shop & Establishment Act License can take benefit of these subsidies & schemes to lessen their operating costs & grow their business.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Ease of opening Current bank account of the business:</h3>
            <p>As per RBI regulations, every business must have a separate business account to manage its money. Under the Act, only a Shop and Establishment Act Registration Certificate can be used to create this business account.</p>
          </div>
      </div>
       
      </div>
    </div>
  )
}
