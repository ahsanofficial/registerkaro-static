
import Image from 'next/image'
import { useState } from 'react'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessCompany = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessCompany'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>You may follow the given step by step procedure for company registration in Qatar:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Select Company Name and structure:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Documentation:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Obtain approvals: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: File Application: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Select Company Name and structure:</h3>
            <p className='mb-0'> The first and foremost step in the company registration process is to select the company name and verify it with the Ministry of Commerce and Industry, Doha, whether it is available for registration and is not violating any rules. Along with that, it is necessary to select the business structure for the company registration depending on the type of business. 
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Documentation:</h3>
            <p className='mb-0'> Next step is to prepare the documents for the registration process which includes memorandum of association, article of association, list of directors, shareholders, partners, members, along with their personal details such as identity proof, financial documents, utility bills of the registered office address, etc.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Obtain approvals: </h3>
            <p className='mb-0'>After preparing your paperwork, you'll need to get the go-ahead from a number of government agencies, such as the Ministry of Interior, the Ministry of Municipalities and Environment, and the Ministry of Economy and Commerce. Depending on the type of your firm, you may additionally require permits from authorities that are particular to your industry.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: File Application: </h3>
            <p className='mb-0'>After obtaining the documents and approvals, now file the registration application with the Ministry of Commerce and Industry. The authority will evaluate the application and if found no error, your company will be registered.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


