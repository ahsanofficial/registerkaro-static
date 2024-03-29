
import Image from 'next/image'
import { useState } from 'react'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {
    cityName: string;
}
export const ProcessIncrease = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessIncrease'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>Before starting with the procedure to increase Authorized Capital it is vital to verify the Articles of Association to make sure that there is a provision in the AoA referring to the increase of the Company’s Authorized Share Capital. If there is no such provision then the Company must first make alterations to the Articles of Association of the Company. Once you verify the AoA of the Company, then you can start with the procedure. Following is the process to increase Authorized Capital of a Company:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Conduct a Board Meeting:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Conduct EGM:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: File ROC Forms:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Shares Allotment:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Conduct a Board Meeting:</h3>
            <p className='mb-0'>It is important to conduct a Board Meeting by providing notice to the Director to increase Authorized Capital. In this meeting, it is vital to get approval from the BoDs for increasing the Company’s Authorized Share Capital. After this process, a date should be fixed to conduct an EGM (Extraordinary General Meeting) meeting to get approval of the Company’s Shareholders for increasing the Authorized Share Capital & make alterations to the Memorandum of Association of the Company. Lastly, get the approval of the BODs, the Company Secretary who is present at the meeting to present the notice of EGM to the shareholder. Basing the approval, the notice of EGM should be presented to the Director, Auditors & Shareholders of the Company.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Conduct EGM:</h3>
            <p className='mb-0'> Conduct this meeting & get approval of the shareholders to increase the authorized share capital on the date, time & place that is cited on the notice. The approval of the shareholders of the Company to increase Authorized Capital must be in the form of an Ordinary Resolution.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: File ROC Forms:</h3>
            <p className='mb-0'>After the Ordinary Resolution is passed at the EGM Form SH-7 should be filed by the Company within 30 days of passing the Ordinary Resolution. The suggested Government Fees for the Authorized Capital must be paid & the documents mentioned below must be attached.
            </p>
             <div className='ms-5'>
                <p> 1 : Notice regarding EGM;</p>
                <p> 2 : Authorized true copy of the ordinary resolution;</p>
                <p> 3 : The altered MoA (which represents the higher authorized capital).</p>
             </div>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Shares Allotment:</h3>
            <p className='mb-0'> Once the Company’s Authorized Share Capital is increased the paid-up capital of the Company can be increased by issuing the new equity shares.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


