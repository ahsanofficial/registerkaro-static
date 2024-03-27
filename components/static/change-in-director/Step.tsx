
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Step = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Step'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>Following is the procedure for change in director of a Company: </p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Apply for DIN:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Hold a Board Meeting:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Hold a General Meeting:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Filing of Form DIR-12:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Resignation from the Directorship:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: File Form DIR-11:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7: Hold a Board Meeting:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Apply for DIN:</h3>
            <p className='mb-0'>Before starting the procedure, you need to obtain the DIN of the Director in order to become a Director of a Company.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Hold a Board Meeting:</h3>
            <p className='mb-0'>It is necessary to hold a Board Meeting for any change of Director in a Company. Whether there is an appointment, removal, resignation of a Director, or a consent from the Board Members is compulsory
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Hold a General Meeting:</h3>
            <p className='mb-0'>A General Meeting must be held to take consent from the majority of members regarding the Company’s Director change.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Filing of Form DIR-12:</h3>
            <p className='mb-0'>As per Section 152(5) of the Companies Act, 2013 with Rule 8 of the Companies (Appointment & Qualification of Directors) Rules, 2014, this form is required to be filed with the Registrar, within 30 days of appointment of a new Director of a Company.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Resignation from the Directorship:</h3>
            <p className='mb-0'>A Director can resign from the Company anytime by giving a prior notice to the Company. The Company must intimate to the Registrar of Companies within 30 days from the Resignation Date in Form DIR-12.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: File Form DIR-11:</h3>
            <p className='mb-0'>According to the Section 168(1) of the Companies Act, 2013, this form must be filed to the Registrar of Companies for the purpose of intimating the Resigning Director.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7: Hold a Board Meeting:</h3>
            <p className='mb-0'>For acceptance of resignation from the existing Director.
            </p>
          </div>
        </div>
        
      </div>
      <p className='main-para'><strong>Note : </strong>Note: Every resolution is required to be filed within 30 days of passing a Special Resolution in Form MGT-14 with RoC.</p>
    </div>
  )
  
}
