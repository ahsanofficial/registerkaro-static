
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
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessConversion = () => {
    const [active, setActive] = useState('1')
  
    const handleActive = (id: string) => {
      setActive(id)
    }
  
    return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessConversion'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1-Preparation and Eligibility Check:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2 - Document Preparation:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3 - Submission to Registrar:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4 - Registrar's Review:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5 - Registration:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6 - Notification to Registrar of Firms:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7 - Property Registration:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8- Continuation of Legal Proceedings:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 9 - Adaptation of Agreements and Contracts:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={ten} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 10 - Partner Liability Management:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('11')} className={`btn flex ${active === '11' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eleven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 11 - Compliance with Notice Requirements:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('12')} className={`btn flex ${active === '12' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={twelve} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 12 - Post-Conversion Compliance:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1-Preparation and Eligibility Check:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Ensure that all partners of the firm consent to the conversion and are willing to become partners in the LLP.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Verify that the firm meets the eligibility criteria as per the schedule.</p>
            
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2 - Document Preparation:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Draft a statement to be signed by all partners, containing details such as the firm's name, registration number, and date of registration under the Indian Partnership Act, 1932.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Prepare the necessary incorporation documents and statements as per the requirements of section 11.</p>
            
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3 - Submission to Registrar:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> File the documents with the Registrar of Companies, along with the prescribed fee.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Ensure the completeness and accuracy of the provided information.</p>
            
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4 - Registrar's Review:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> The Registrar reviews the submitted documents and verifies their authenticity.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> In case of any deficiencies, the Registrar may request additional information or clarification.</p>
            
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5 - Registration:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Upon satisfactory review, the Registrar registers the conversion and issues a certificate of registration.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> The LLP is now officially recognized as a separate legal entity under the LLP Act.</p>
            
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6 - Notification to Registrar of Firms:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Within fifteen days of registration, inform the Registrar of Firms under the Indian Partnership Act, 1932 about the conversion.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Provide details of the LLP's registration and any other required information in the prescribed format.</p>
            
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7 - Property Registration:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Notify relevant authorities of the conversion for any registered properties owned by the firm.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Comply with the requirements of the respective authorities regarding property transfer.</p>
            
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>Step 8- Continuation of Legal Proceedings:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Ensure that any ongoing legal proceedings involving the firm are continued with the LLP as the successor entity.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Inform relevant courts, tribunals, or authorities about the conversion for seamless continuation of proceedings.</p>
            
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>Step 9 - Adaptation of Agreements and Contracts:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Update all existing agreements, contracts, and arrangements to reflect the conversion.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Ensure that rights, obligations, and liabilities are transferred to the LLP without disruption.</p>
            
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>Step 10 - Partner Liability Management:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Inform partners about their continued personal liability for pre-conversion obligations of the firm.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Establish indemnification arrangements with the LLP to protect partners from such liabilities.</p>
            
          </div>
          <div className={`${active === '11' ? 'active' : 'none'}`}>
            <h3>Step 11 - Compliance with Notice Requirements:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Include conversion details in official correspondence of the LLP for the specified period as mandated by the schedule.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Ensure timely compliance to avoid penalties for non-compliance.</p>
            
          </div>
          <div className={`${active === '12' ? 'active' : 'none'}`}>
            <h3>Step 12 - Post-Conversion Compliance:</h3>
            <p className='mb-0 pt-2'><strong>1.</strong> Fulfill any additional regulatory or statutory requirements applicable to LLPs post-conversion.</p>
            <p className='mb-0 pt-2'><strong>2.</strong> Ensure ongoing compliance with LLP regulations and reporting obligations.</p>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}



