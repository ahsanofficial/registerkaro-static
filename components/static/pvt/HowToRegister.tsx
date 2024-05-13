
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

interface HeroProps {
  cityName: string;
}
export const HowToRegister = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowToRegister'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>Following is the step-by-step procedure for Private Limited Company Registration in {cityName}: </p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Obtain a Digital Signature Certificate (DSC)</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Secure a Director Identification Number (DIN)</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Reserve a Company Name (SPICe+ Part A)</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Submit Company Information (SPICe+ Part B)</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Prepare and File Incorporation Documents (SPICe+ MOA and AOA)</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Certificate of Incorporation</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7: Additional Registration: File AGILE-PRO-S Form</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Obtain a Digital Signature Certificate (DSC)</h3>
            <p className='mb-0'>Each director and shareholder is required to obtain a Digital Signature Certificate (DSC). The process requires submission of basic information including passport-sized photographs, Permanent Account Number (PAN), Aadhaar Card, contact details, and email. Foreign nationals must also provide notarized and apostilled copies of their documents, as needed.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Secure a Director Identification Number (DIN)</h3>
            <p className='mb-0'>Anyone aiming to become a director in the company must secure a Director Identification Number (DIN). This number is crucial and must be included in the company registration documents.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Reserve a Company Name (SPICe+ Part A)</h3>
            <p className='mb-0'>Initiate the registration by filing the SPICe+ Part A form, which is aimed at reserving a unique name for the company. The form requires details such as type of company, class, category, sub-category, and the main division of industrial activities along with a detailed description of the business. Propose up to two names for approval.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Submit Company Information (SPICe+ Part B)</h3>
            <p className='mb-0'>Fill out the SPICe+ Part B form with detailed information about the company's capital structure, address of the registered office, details of subscribers and directors, applicable stamp duty, and applications for PAN and TAN, along with required attachments. This step ensures adherence to the Companies Act of 2013, with all documents digitally signed by designated professionals.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Prepare and File Incorporation Documents (SPICe+ MOA and AOA)</h3>
            <p className='mb-0'>Draft and prepare the Memorandum of Association (MOA) and Articles of Association (AOA), which outline essential details of the company. These documents must be digitally signed by subscribers and certified professionals before submission to the Ministry of Corporate Affairs (MCA) for approval.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Certificate of Incorporation</h3>
            <p className='mb-0'>Following the successful verification of all documents, the MCA issues a Certificate of Incorporation (COI) along with the Company Identification Number (CIN), PAN, and TAN assigned to the company.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7: Additional Registration: File AGILE-PRO-S Form</h3>
            <p className='mb-0'>Complete and submit the AGILE-PRO-S form to register for Goods and Services Tax (GST), Employees' Provident Fund Organisation (EPFO), Employees' State Insurance Corporation (ESIC), a corporate bank account, and the necessary shop and establishment license, which varies by state.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


