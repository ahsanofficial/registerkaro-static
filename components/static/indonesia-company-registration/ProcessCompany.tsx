
import Image from 'next/image'
import { useState } from 'react'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
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
        <p className='main-para mb-2'>To register your company in Indonesia, you must follow the given step by step process:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Choose the business name:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Documentation: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Application Filing: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Domicile Letter: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. TAX Registration: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6. Business Identification Number [BIN]: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7. Bank Account & Licenses: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Choose the business name:</h3>
            <p className='mb-0'>The Ministry of Law and Human Rights in Indonesia mandates that a corporation's name contain three separate words or more. After a name has been chosen, it needs to be reserved with the appropriate authorities. 
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Documentation: </h3>
            <p className='mb-0'>Next step is to prepare all the documents such as articles of association, memorandum of association, list of shareholders directors, members, partners, etc, for the filing of application. The articles of organization must be drafted in front of a notary public and signed by the stockholders following the reservation of the business name. 
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Application Filing: </h3>
            <p className='mb-0'>Once all the documents are prepared, file the application with the Ministry of Law and Human Rights. Once filed, After the article of association is approved, the Ministry will issue a document of incorporation, which is official proof that the government has accepted your company as a genuine enterprise.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Domicile Letter: </h3>
            <p className='mb-0'>If a corporation is located outside of the Jakarta region, it is necessary to obtain a letter of domicile from the local government office. Once you have obtained the establishment deed, you may use it for further compliance fulfillment.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. TAX Registration: </h3>
            <p className='mb-0'>In order to open a business bank account, fulfill tax obligations, and get extra permissions in Indonesia, you need to apply for a taxpayer registration number (NPWP) from the relevant tax body.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6. Business Identification Number [BIN]: </h3>
            <p className='mb-0'>In order to apply for operational, commercial, and business permits, a company must provide its 13-digit business identification number (NIB), which serves as its identity. The Online Single Submission (OSS) system is the means by which the business identity number can be obtained.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7. Bank Account & Licenses: </h3>
            <p className='mb-0'>Lastly, you must have to open a bank account and then deposit your paid up capital in that account. Depending on the type of firm and its operations, different business license requirements apply. Depending on the kind of business you are doing, you have to file licensing applications before you can start operations.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


