
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import dft from '../../../assets/images/static/consumer-complaints/steps-filling.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const StepsForFilling = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
  <div className='DocumentButtonWise w-80 m-auto' id='StepsForFilling'>
     <div className='flex-5'>
          <Image alt="Steps for filing a Consumer Complaint,Start with a notice describing your consumer complaint,Vendor’s reciprocity" className="StepsForFilling-img w-100" height={350} loading="lazy" src={dft} />
              <p className='main-para mb-2'>The following are the steps for filing a Consumer Compliant:</p>
          </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Start with a notice describing your consumer complaint</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Vendor’s reciprocity</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Select the correct forum</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Submission of complaint</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. Court fee payment</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Start with a notice describing your consumer complaint</h3>
            <p>
              In the beginning, you will have to express your consumercomplaint or dissatisfaction over any product or service to the manufacturer/producer/seller. It is important that the concern expressed must be in writing. It is always recommended to consult with your lawyer when the claim is above Rs. 10,000 and take their assistance in dispatching the notice as a notice under a lawyer’s professional head depicts the degree of seriousness in taking a course of legal action.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Vendor’s reciprocity</h3>
            <p>
              Once a legal notice has been dispatched to the vendor, it is expected that the vendor will respond to the notice to avoid any legal action or even in the course of legal action. It is suggested that you wait for the vendor’s reciprocity, as some may give you a just reward. The courts will not award incredibly large damages petitions. In case you do not hear from the vendor, you can get in touch with the consumer forum within 15 days of a notice being dispatched.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Select the correct forum</h3>
            <p>
              In the event of both a response or no response from the vendor, now is the time to select the suitable consumer forum for your complaint. Depending upon the nature of the consumer complaint, you will have to select one among the district forum, state commission, or national commission. You may either by yourself or by your representative may approach the forum with your grievances, the resolution of which takes 6 to 18 months.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Submission of complaint</h3>
            <p>
               Once you have chosen the forum as per your complaint, it is time to prepare your grievance in a well-written format, which differs from forum to forum. In case of any problem faced in drafting the consumer complaint, you may also seek professional assistance, such as that of a lawyer, to constitute the ideal complaint, including all the necessary details along with the attachment of the legal notice you sent to the vendor. This attachment justifies your true intent of resolving the dispute in an amicable method without resorting to trials.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. Court fee payment</h3>
            <p>
               Once the documentation is done, you may pay the court fee, which is requested by the filing department, in order to file the consumer complaint. This fee depends upon the claim amount filed. In the event of the success of the lawsuit, the court puts the mandatory obligation on the vendor to compensate you for all the expenditure caused in the process, including attorney fees, filing fees, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
