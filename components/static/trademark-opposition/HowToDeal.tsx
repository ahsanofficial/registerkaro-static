
import Image from 'next/image'
import { useState } from 'react'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const HowToDeal = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowToDeal'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Opposition Notice and counter statement:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Response to counter-statement with evidence:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Evidence in response: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Hearing: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Opposition Notice and counter statement:</h3>
            <p className='mb-0'> Firstly, you have to file a counter statement against the notice you received. Generally, you receive the notice within four months of trademark advertisement or re-advertisement in the Indian Trade Marks Journal. The notice is filed using form TM-O either online or offline by paying the prescribed fee along with the ground of opposition. You now have to file a counter statement defending the ground used, along with evidence, within two months from the date of such receipt. A counter statement filed later than two months will lead to abandonment of the application as there is no extension available to file the Counter Statement.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Response to counter-statement with evidence:</h3>
            <p className='mb-0'> Upon the receipt of the counter statement, the opposing party is required to respond within two months, along with evidence to support their claims made in the Notice of Opposition, which can also include an affidavit and other evidence. It is suggested to reply to the counter statement; however, the response is not mandatory and can be waived off by the opposing party by informing the Trade Marks Registry in India within the prescribed time, or else, the proceedings are tagged as abandoned.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Evidence in response: </h3>
            <p className='mb-0'>If chosen to respond with the supportive evidence by the opposing party, the applicant can also file the evidence in support of his counter statement, or else can choose to waive off the opportunity by filing a letter to the Trademark Registry of India. Otherwise, one should file the evidence within one month.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Hearing: </h3>
            <p className='mb-0'>Upon the successful documentation process, the Registrar shall provide the parties the opportunity to be heard and present their case before the Registrar as per Section 21(5) of the Act. The registrar notifies the parties regarding the hearing and the date for the same. Each party presents its case with evidence to support it before the registrar. On evaluation, the registrar renders a judgement in support of one party, stating whether the trademark shall be registered or denied.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


