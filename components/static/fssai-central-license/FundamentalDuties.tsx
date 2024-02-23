
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const FundamentalDuties = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='FundamentalDuties'>
        <div className='flex justify-content-center'>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Formulating Guidelines and Norms for Food Safety and Hygiene:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Launching Initiatives Nationwide for Food Safety Awareness:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Granting Mandatory Food License and Registration to Food Business Operators:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Facilitating Recommendations to GOI for New Policies:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Rolling Out Directions and Guidelines in View of FSS Act, 2006:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Taking Legal Actions Against Illicit Practices:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Formulating Guidelines and Norms for Food Safety and Hygiene:</h3>
            <p className='mb-0'>
            Meticulously crafting comprehensive guidelines and norms to establish benchmarks for food safety practices and hygiene standards.</p>
             <p className='mb-0'>Ensuring a robust regulatory framework that prevents and mitigates risks associated with unsafe food practices.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Launching Initiatives Nationwide for Food Safety Awareness:</h3>
            <p className='mb-0'>Spearheading nationwide initiatives to educate and sensitize the masses about the critical importance of adhering to food safety norms.</p>
             <p className='mb-0'>Fostering a pervasive culture of awareness to empower individuals and communities to make informed choices for enhanced public health.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Granting Mandatory Food License and Registration to Food Business Operators:</h3>
            <p className='mb-0'>Issuing mandatory food licenses and registrations to food business operators (FBOs) engaged in the production, distribution, and sale of food.</p>
             <p className='mb-0'>Reinforcing accountability and compliance within the food industry to guarantee the quality and safety of food products in the market.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Facilitating Recommendations to GOI for New Policies:</h3>
            <p className='mb-0'>Functioning as an advisory body to facilitate recommendations to the Government of India (GOI) for the formulation of new policies related to food safety and standards.</p>
             <p className='mb-0'>Engaging in continuous research and collaboration to propose innovative measures responsive to the evolving landscape of the food industry.

            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Rolling Out Directions and Guidelines in View of FSS Act, 2006:</h3>
            <p className='mb-0'>Disseminating directives and guidelines in adherence to the Food Safety and Standards Act of 2006.</p>
             <p className='mb-0'>Providing a compass for entities within the food sector, outlining requisite standards and protocols to ensure compliance with the legislative framework.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Taking Legal Actions Against Illicit Practices:</h3>
            <p className='mb-0'>Vigilantly taking legal actions against food businesses allegedly involved in illicit practices such as food adulteration.</p>
             <p className='mb-0'>Operating within a stringent legal framework to uphold the integrity of the food supply chain and safeguard the interests of consumers.
            </p>
          </div>
        </div>
      </div>
      <p>In summary, the Food Safety and Standards Authority of India, through its multifaceted duties and functions, emerges as a stalwart guardian of public health and safety, actively shaping and regulating the landscape of the nation’s food industry to ensure the well-being of its citizens.</p>
    </div>
  )
  
}