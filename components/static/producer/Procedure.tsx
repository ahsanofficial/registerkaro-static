
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Procedure = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Procedure'>
      <p className='main-para mb-0'>Following is the list of all the vital documents required for the Registration of Producer Company in India:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="one" loading="lazy" width={30} height={30} /> &nbsp; Step 1: Obtain DSC
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="two" loading="lazy" width={30} height={30} /> &nbsp; Step 2: Choose a Unique Company Name
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /> &nbsp; Step 3: Prepare all Requisite Documents
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={four} alt="four" loading="lazy" width={30} height={30} /> &nbsp; Step 4: File for Incorporation
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={five} alt="five" loading="lazy" width={30} height={30} /> &nbsp; Step 5: Follow up and Approval
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
        </div>
        <div className='flex-5 text-justify fs-20'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <p>
            First, you need to obtain a DSC (Digital Signature Certificate), it is vital for signing the digital incorporation application.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <p>
             Then, you need to choose a unique name for your Company that aligns with the set name availability guidelines. At the time of the Producer Company Registration process, list your chosen names in the SPICe+ Part-A Form.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <p>
            Once your Company Name is approved, then the next step is to prepare all the vital documents for Company Registration. At this step, MoA, AoA, INC-9, INC-10, DIR-2, etc., are prepared & shared for signature.
            </p>
          </div> 
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <p>
            Once all the vital documents are signed by the promoters then the next step is to file the Incorporation Form with SPICe+ INC-32 Form.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <p>
            Once you have filed for the Registration, then the next step is to follow up with the Government. If all your Documents and application are fine then the Government will issue the Registration Certificate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
