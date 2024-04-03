
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


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessCompany = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessCompany'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>You may register your company in Italy following the given step by step procedure:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Choose the business structure:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Decide Company Name:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Legal Representative Appointment:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Codice Fiscale Procurement:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. Bank Account Opening:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6. Documentation:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7. Application Filing:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8. Other Licenses:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 9. Tax Registration:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Choose the business structure:</h3>
            <p className='mb-0'>The first step is to create a business plan that might contain additional important information as your business plan will probably give you a clearer idea of the kind of company you wish to launch. The main operations, the expected size of the firm, and the overall budget are just a few of the numerous factors that will impact the type of legal organization you establish.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Decide Company Name:</h3>
            <p className='mb-0'>Choosing a name for your company ensuring that your chosen name conforms with the rules of the Italian Commercial Registry and fits your brand identity. Make use of the registry to confirm that the name you have chosen is available, so as to prevent disputes with already-existing companies.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Legal Representative Appointment:</h3>
            <p className='mb-0'>It is required of international enterprises to choose a legal representative. This person serves as the go-between for your business and the Italian government. A legal entity having a physical presence in Italy or an Italian resident may serve as the representative.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Codice Fiscale Procurement:</h3>
            <p className='mb-0'>The Italian tax code, or codice fiscale, is a special identification number required for compliance and business operations. A Codice Fiscale is required for each director, shareholder, and legal representative. The Italian Revenue Agency, Agenzia delle Entrate, is the source of this information.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. Bank Account Opening:</h3>
            <p className='mb-0'>Create an initial bank account in Italy prior to the official registration of your firm as the first capital needed for the firm will be deposited into this account. It's important to make sure you have all the required paperwork for a seamless account opening process because different banks may have different criteria.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6. Documentation:</h3>
            <p className='mb-0'>Next step is to prepare all the required documentations for the application process such as Article of Association, Memorandum of Association, directors’ details, shareholders’ details, capital deposition documents, etc. While drafting these documents, collaborate with legal experts to make sure it conforms with Italian company legislation. 
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7. Application Filing:</h3>
            <p className='mb-0'>The main database for business data is the Italian Commercial Registry (Registro delle Imprese). Fill out the forms and send them to the registrar with the relevant supporting documentation, such as the Articles of Association, the evidence of beginning capital, and the director and legal representative's identity documents.
            </p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>Step 8. Other Licenses:</h3>
            <p className='mb-0'>Specific licenses or permits may be needed for certain company operations depending on the industry you are operating in or the nature of business operations. Find out what the industry's regulations are, then get the required approvals as failure to abide by license requirements may result in fines or maybe the liquidation of your company.
            </p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>Step 9. Tax Registration:</h3>
            <p className='mb-0'>Once your company is registered, you must now register your company with the Tax authority under Italian Laws. Enroll in value-added tax (IVA), corporate income tax (Imposta sul Reddito delle Società, or IRES), and any other applicable taxes, also collaborate with tax experts to guarantee precise and punctual submissions.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


