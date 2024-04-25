
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


export const ProcessCompany = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessCompany'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Initial Assessment:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Research and Analysis:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Response Strategy Development:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Drafting the Response:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. Submission and Follow-up:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6. Trademark Hearing (if applicable):</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7. Publication in Trademark Journal:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8. Registration:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Initial Assessment:</h3>
            <p className='mb-0 mt-2'>1. Evaluate the grounds and details of the trademark objection received.</p>
            <p className='mb-0 mt-2'>2. Understand the specific reasons for the objection and its implications on your trademark application.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Research and Analysis:</h3>
            <p className='mb-0 mt-2'>1. Conduct thorough research on relevant trademark laws, precedents, and regulations.</p>
            <p className='mb-0 mt-2'>2. Analyze previous cases and decisions related to similar objections to inform your response strategy.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Response Strategy Development:</h3>
            <p className='mb-0 mt-2'>1. Formulate a strategic plan to address each objection raised by the authorities.</p>
            <p className='mb-0 mt-2'>2. Determine the key arguments and evidence to support your position and strengthen your case.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Drafting the Response:</h3>
            <p className='mb-0 mt-2'>1. Prepare a detailed and persuasive reply to the trademark objection.</p>
            <p className='mb-0 mt-2'>2. Clearly articulate your arguments and address each objection point by point.</p>
            <p className='mb-0 mt-2'>3. Ensure compliance with legal requirements and formalities in the response drafting process..</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. Submission and Follow-up:</h3>
            <p className='mb-0 mt-2'>1. Submit the response to the appropriate trademark office within the stipulated timeframe.</p>
            <p className='mb-0 mt-2'>2. Monitor the progress of the objection resolution process and follow up as necessary.</p>
            <p className='mb-0 mt-2'>3. Provide any additional information or clarification requested by the authorities promptly.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6. Trademark Hearing (if applicable): </h3>
            <p className='mb-0 mt-2'>1. Attend the trademark hearing, if scheduled, to present your case before the authorities.</p>
            <p className='mb-0 mt-2'>2. Present your arguments effectively and respond to any queries or concerns raised during the hearing.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7. Publication in Trademark Journal:</h3>
            <p className='mb-0 mt-2'>1. Upon successfully resolving the objections, your trademark application may be published in the official Trademark Journal.</p>
            <p className='mb-0 mt-2'>2. This publication serves as a public notice of your pending trademark registration.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>Step 8. Registration:</h3>
            <p className='mb-0 mt-2'>1. Upon completion of the objection resolution process and satisfaction of all requirements, your trademark will be registered.</p>
            <p className='mb-0 mt-2'>2. You will receive a certificate of registration, granting you exclusive rights to use the trademark for the specified goods or services.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


