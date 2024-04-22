import Image from 'next/image'
import React, { useState } from 'react'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessOfRegn = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessOfRegn'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="one" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Trademark Search:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="two" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Registration Application:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Application evaluation by WIPO: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="four" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Notification by WIPO: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="five" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Trademark Opposition: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="six" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Granting Trademark: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Trademark Search:</h3>
            <p className='mb-0'> Prior to submitting an application for international trademark registration, the applicant must perform a trademark search. The applicant can check if there are any registered trademarks that are similar to or identical to theirs by conducting a trademark search on the WIPO Global Brand Database. Before submitting an application for trademark registration, the applicant must confirm that there are no already-registered trademarks that are similar to or identical to theirs in any of the Madrid Protocol nations. The application will be denied if there is an existing trademark that is identical or similar. 
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Registration Application:</h3>
            <p className='mb-0'> The applicant needs to submit the international trademark registration application using Form MM2(E) following the trademark search. Since the Office of the Registrar of Trademarks in India is the office of origin for Indian firms, the applicant should submit the application for international trademark registration there, not with the WIPO. The application will be processed and verified by the Registrar of Trademarks. The Registrar will file it with the World Intellectual Property Organization (WIPO) in Geneva following verification. The foreign trademark application must be submitted electronically via the official IP India website, along with payment of the handling fee.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Application evaluation by WIPO: </h3>
            <p className='mb-0'>Once the WIPO receives the trademark registration application from the Registrar of Trademark Office, it will review it. If the WIPO determines that the registration application is suitable, the Trademark will be registered in the International Register and published in the WIPO Gazette of International Trademarks.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Notification by WIPO: </h3>
            <p className='mb-0'>If the applicant chooses to seek registration, each member country of the Madrid Protocol will get notification from the WIPO of the worldwide trademark application. In accordance with trademark laws and regulations, the member nations will review the application for international registration. Within 12 to 18 months of receiving the application for trademark registration, the member nations will submit their examination report and advise the WIPO of their acceptance or rejection of the application.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Trademark Opposition: </h3>
            <p className='mb-0'>Should any of the member nations object to the trademark registration application, it needs to be filed with the WIPO using the format specified. Direct communication between the trademark applicant and the relevant Madrid Protocol member nation will characterize the opposition processes to the trademark application. The opposition processes consist of the following: prosecution, hearing, response, and appeal. Throughout the entire opposition process, the WIPO will be involved.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Granting Trademark: </h3>
            <p className='mb-0'>Once the member countries accept the application, the Trademark will be registered under the Madrid Protocol in the respective chosen countries for a period of ten years. Following approval of the registration application, the applicant will receive a statement of grant attesting to the international trademark registration of an Indian trademark.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
