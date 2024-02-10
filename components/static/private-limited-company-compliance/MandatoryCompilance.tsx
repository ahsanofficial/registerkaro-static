
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

export const MandatoryCompilance = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
      <p className='main-para mb-2'>Following is the mandatory Private Limited Company Compliance:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1. Appointment of 1st Auditor:</h3>
            <p>
              The BoDs are required to appoint an auditor within 30 days of Company Incorporation. A Private Limited Company that fails to appoint an auditor is liable to pay a penalty. Further, the Company will not be allowed to start a business. He or She is required to stay in the office till the completion of the 1st Annual General Meeting (AGM).
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2. Subsequent Auditor:</h3>
            <p>
              This auditor is appointed to monitor the fair dealings of a Company in terms of its financial position. He or She is appointed in the 1st AGM & continues to stay in the same position till the 6th AGM. According to the Companies Act, 2013, a Subsequent Auditor is appointed by the filing Form ADT-1.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3. AGM (Annual General Meeting):</h3>
            <p>
              Annual General Meeting or AGM is one of the most vital Annual Compliance for Private Limited Company. At the Annual General Meetings, the Board of Directors of the Company is required to present its true financial position to the shareholders. Annual General Meeting is required to be organized on/before 30th Sep every Financial Year (F.Y.) during working hours of the Company. Also, the Annual General Meeting shouldn’t be held on public holidays or after business hours. It must be held at the registered office after issuance of notice of at least 21 days.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4. Board Meeting:</h3>
            <p>
              The 1st Board Meeting is required to be held within 1 month or 30 days of its incorporation. Four Board Meetings are required to be held in each Financial Year. Also, one should note that the gap between 2 consecutive meetings cannot be more than 120 days. Declaration of Board Meetings is to be duly informed to each Director at least 7 days before the meeting date.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5. Director Disclosure:</h3>
            <p>
              All Private Limited Companies in India are required to file Form MBP-1 to disclose their interest in other entities or companies annually on the 1st Board Meeting of every year.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6. Filing of Financial Statements:</h3>
            <p>
              Every Private Limited Company is required to file their financial statements i.e., Profit & Loss Account and Balance Sheet along with the Director’s Report by filing Form AOC-4 within 30 days of holding the Annual General Meeting.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7. Annual Returns Filing:</h3>
            <p>
              Every Private Limited Company in India must file their Annual Returns within a time span of 60 days of holding the AGM. This can be done by filing MCA Form MGT-7. Failure to file Annual Returns levy a penalty from the due date of non-filing.
            </p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8. Director KYC:</h3>
            <p>
              Directors having DIN or Director Identification Number with active status are required to file DIR-3 KYC yearly as per the Companies Rules. Failure to file Director KYC will lead to inactive DIN status on the MCA portal. Also, remember that no form of Private Limited Company Compliance can be filed if DIR-3 stands deactivated.
            </p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9. Form DIR-8:</h3>
            <p>
              This form is required to be filed by every Director of a Private Limited Company during their appointment ascertaining that he or she is not disqualified from functioning as a Company’s Director.
            </p>
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>10. Commencement of Business Certificate:</h3>
            <p>
              This Certificate is required to be obtained by every company within 180 days of Company Incorporation. In case a Company fails to attain this Certificate.
            </p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Appointment of 1st Auditor:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Subsequent Auditor:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>AGM (Annual General Meeting):</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Board Meeting:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Director Disclosure:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Filing of Financial Statements:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Annual Returns Filing:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Director KYC:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Form DIR-8:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={ten} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Commencement of Business Certificate:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
