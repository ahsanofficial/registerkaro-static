import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const HowToRegister = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  three
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='How'>
      <p className='main-para'>If you have found your destination in the face of a Private Limited Company, then let Registerkaro map the road to your destination. Following the given route, the company registration process becomes easy to handle.</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
        <div className='flex-4'>
           <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={one} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'>Select the Company name</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
           <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={two} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'>Digital Signature Certificate</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
           <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={three} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'>SPICe+ Form (INC-32)</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
           <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={four} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'>Electronic submission of MoA and AoA</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
           <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={five} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'>Non-electronic submission of MoA and AoA</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
           <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={six} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'>Certificate of Incorporation</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
        </div>
        <div className='flex-6 text-justify fs-20'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Select the Company name</h3>
            <p>Business structure selection is the first step for company registration and when the private limited company is what you have chosen, time is to select the company name. It is important to then verify if the selected name is available for company registration. Once MCA approves a certain name, the applicant then is left with 21 days to register the company.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Digital Signature Certificate</h3>
            <p>The next step comprises obtaining the Digital Signature Certificate (DSC) which is the digital identity of the applicant registering itself as the director. DSC is required for proceeding ahead with the company registration process as it is needed for drafting the Memorandum of Association (MOA) and Articles of Association (AOA). It is important to note that the DSC can be obtained only through government-certified organizations.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: SPICe+ Form (INC-32)</h3>
            <p>SPICe+ Form (INC-32) has been introduced to streamline the company registration process for private limited companies. This form is used to obtain Director Identification Number (DIN) which is required by individuals intending to be a director, Employees' Provident Fund Organisation (EPFO), Company’s PAN, Company’s Tax Deduction Account Number, and Employee's State Insurance Corporation (ESIC) applications.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Electronic submission of MoA and AoA</h3>
            <p>A Memorandum of Association and an Article of Association are one of the main components of company registration as one directs the charter and the other lists the internal rules and regulations for the company. Therefore, both MoA and AoA are required to be submitted electronically, using the INC-33 and INC-34 forms respectively especially in cases where the first subscribers are either non-individual persons (based in India), Indian nationals being subscribers (non-directors) & subscriber-cum-directors, and foreign national being subscribers (non-directors) & subscriber-cum-directors [DIN and business visa is a must].</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Non-electronic submission of MoA and AoA</h3>
            <p>In certain cases, the submission of MoA and AoA is done through the non-electronic method in the form of an attachment to the SPICe+ Form. Such cases include where the first subscriber is a non-individual subscriber [Foreign based], a foreign national other than a director with a valid DIN but no valid business visa, a foreign national being a director with a DIN but no valid business visa, the foreign national being a director with no DIN and at last in a company with more than seven subscribers.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Certificate of Incorporation</h3>
            <p>After the verification of the application & documents, the MCA grants the Certificate of Incorporation. Basically, it’s conclusive proof of the existence of the Company, wherein the Incorporation Date, CIN (Company Identification Number), PAN & TAN are mentioned with the sign & seal of the Registrar. Moreover, DIN is allotted to Directors with the Registration Approval. The CIN receipt is the proof of the legal existence of your business.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
