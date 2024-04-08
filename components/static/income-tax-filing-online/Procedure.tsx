
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
import nine from '../../../assets/images/pvt-reg/HowToRegister/nine.svg'
import ten from '../../../assets/images/pvt-reg/HowToRegister/ten.svg'
import eleven from '../../../assets/images/pvt-reg/HowToRegister/eleven.svg'
import twelve from '../../../assets/images/pvt-reg/HowToRegister/twelve.svg'
import thirteen from '../../../assets/images/pvt-reg/HowToRegister/thirteen.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {
    cityName: string;
}
export const Procedure = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Procedure'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>The following is the step-by-step procedure for Income Tax Filing Online:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Gather Necessary Documents</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Choose the Right ITR Form</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Access the Official Income Tax e-Filing Portal</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Register or Login</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Download the Relevant ITR Form</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Fill in the Form Offline</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7: Validate the Form</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8: Generate XML File</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 9: Login to the e-Filing Portal Again</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={ten} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 10: Click on ‘e-File’ and ‘Income Tax Return’</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('11')} className={`btn flex ${active === '11' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eleven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 11: Choose ‘Upload XML’</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('12')} className={`btn flex ${active === '12' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={twelve} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 12: Verify Your Identity</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('13')} className={`btn flex ${active === '13' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={thirteen} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 13: Confirmation</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>


          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Gather Necessary Documents</h3>
            <p className='mb-0'>Collect all relevant documents such as PAN card, Aadhaar card, Form 16, bank statements, investment details, and other income-related documents.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Choose the Right ITR Form</h3>
            <p className='mb-0'>Select the appropriate Income Tax Return (ITR) form based on your income sources and financial activities. Commonly used forms include ITR-1, ITR-2, ITR-3, and so on.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Access the Official Income Tax e-Filing Portal</h3>
            <p className='mb-0'>Visit the official Income Tax e-Filing portal.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Register or Login</h3>
            <p className='mb-0'>If you are a new user, register on the portal by providing necessary details. If you are a returning user, log in with your credentials.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Download the Relevant ITR Form</h3>
            <p className='mb-0'>Download the selected ITR form from the portal’s “Downloads” section. Ensure that you choose the form for the assessment year you are filing for.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Fill in the Form Offline</h3>
            <p className='mb-0'>Use the downloaded form to fill in your details offline. Enter accurate information regarding your income, deductions, and tax liabilities.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7: Validate the Form</h3>
            <p className='mb-0'>Click on the ‘Validate’ button to confirm and validate the entered details. The system will check for any errors or inconsistencies in the form.
            </p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>Step 8: Generate XML File</h3>
            <p className='mb-0'>After validation, click on the ‘Generate XML’ button to convert the form into an Extensible Markup Language (XML) file.
            </p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>Step 9: Login to the e-Filing Portal Again</h3>
            <p className='mb-0'>Log in to the official e-Filing portal using your credentials.
            </p>
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>Step 10: Click on ‘e-File’ and ‘Income Tax Return’</h3>
            <p className='mb-0'>Navigate to the ‘e-File’ section and select ‘Income Tax Return.’
            </p>
          </div>
          <div className={`${active === '11' ? 'active' : 'none'}`}>
            <h3>Step 11: Choose ‘Upload XML’</h3>
            <p className='mb-0'>Choose the assessment year, ITR form number, and the filing type. Select ‘Upload XML’ and upload the XML file generated in the previous step.
            </p>
          </div>
          <div className={`${active === '12' ? 'active' : 'none'}`}>
            <h3>Step 12: Verify Your Identity</h3>
            <p className='mb-0'>After uploading, you will be prompted to verify your identity using Electronic Verification Code (EVC), Aadhaar OTP, or manual submission of ITR-V.
            </p>
          </div>
          <div className={`${active === '13' ? 'active' : 'none'}`}>
            <h3>Step 13: Confirmation</h3>
            <p className='mb-0'>Upon successful submission, you will receive an acknowledgment with a unique acknowledgment number. This serves as confirmation of your online income tax filing.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


