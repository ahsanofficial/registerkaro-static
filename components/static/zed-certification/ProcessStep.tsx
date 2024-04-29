import Image from 'next/image'
import { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessStep = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessStep'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>It is suggested that this scheme be implemented in 2 stages:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>PHASE 1: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>PHASE 2: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>PHASE 1: </h3>
            <p className='mb-0'>Manufacturing MSMEs registered with UDYAM. The main goals of this phase will be to include as many manufacturing MSMEs as possible and guide them through the ZED process.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'} text-center`}>
            <h3>PHASE 2: </h3>
            <p className='mb-0'>MSMEs in the service sector are included. The integration of MSMEs (manufacturing and service sectors) registered under a State Government protocol or system but not on UDYAM is another goal of this phase. From this point on, more data on the performance and operations of MSME may be gathered in order to develop a National MSME Competitiveness Index.<br />PHASE 2 also includes financing ZED Certified MSMEs to get international certifications as needed for foreign markets, as well as setting up arrangements to align ZED Certification with international certifications for its widespread recognition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
