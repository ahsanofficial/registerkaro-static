
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


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const MedicalDevice = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MedicalDevice'>
        <div className='flex justify-content-center'>
       
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
    
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Classification of Medical Devices:</h3>
            <p className='mb-0'>Devices are categorized into different classes based on their potential risk to patients. Tclassification is in line with the Global Harmonization Task Force (GHTF) guidelines and is crucial in determining the registration pathway.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Registration Application:</h3>
            <p className='mb-0'>Manufacturers or their authorized representatives must apply for registration to CDSCO along with the necessary documentation. This includes technical details, manufacturing information, clinical data (if applicable), and evidence of conformity to Indian or International Standards.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Quality Management System (QMS) Certification:</h3>
            <p className='mb-0'>For certain classes of Medical Devices, certification of conformity with QMS standards such as ISO 13485 is mandatory. This ensures that the manufacturing process adheres to defined quality standards.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Clinical Data Requirements:</h3>
            <p className='mb-0'>Depending on the risk classification, some medical devices might require clinical data to establish safety and efficiency. This could involve clinical trials conducted in India or other countries, with the data submitted for review by the CDSCO.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Review and Evaluation:</h3>
            <p className='mb-0'>The CDSCO examines the submitted documents, labeling, and risk assessment. They assess whether the device meets safety and performance standards as per Indian Regulations.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Approval or Rejection:</h3>
            <p className='mb-0'>Based on the evaluation, the CDSCO may approve the medical device’s registration if it complies with all requirements. In cases of non-compliance, additional information or modifications may be requested, or the application might be rejected.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Post-Market Surveillance:</h3>
            <p className='mb-0'>Once approved, manufacturers are obligated to monitor the device’s performance in the market and report any adverse events. The CDSCO conducts periodic audits and inspections to ensure ongoing compliance with regulatory standards.
            </p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8: Import and Distribution:</h3>
            <p className='mb-0'>Upon successful registration, the device can be imported and distributed in the Indian Market. Importers and distributors must comply with regulations concerning storage, transportation, and sale of medical devices.
            </p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9: Renewal and Modifications:</h3>
            <p className='mb-0'>Registrations are typically valid for a certain period and need to be renewed periodically. Any modifications to the device or manufacturing process also require prior approval from the CDSCO.
            </p>
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>10: Regulatory Amendments:</h3>
            <p className='mb-0'>Manufacturers must stay updated with any changes in regulations or guidelines issued by the CDSCO and ensure compliance with evolving requirements,
            </p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Classification of Medical Devices:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Registration Application:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Quality Management System (QMS) Certification:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Clinical Data Requirements:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Review and Evaluation:lity:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Approval or Rejection:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Post-Market Surveillance:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Import and Distribution:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Renewal and Modifications:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={ten} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Regulatory Amendments:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
        <p className='main-para'>Navigating the Medical Device registration process in India requires meticulous attention to regulatory requirements, documentation, and compliance with quality standards to ensure successful approval and market access. Our organization excels in such matters.</p>
    </div>
  )
  
}
