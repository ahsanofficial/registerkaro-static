
import Image from 'next/image'
import { useState } from 'react'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {
    cityName: string;
}
export const ProcessCompany = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessCompany'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Setting up Network Licensing for the First Time: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Updating Network Licensing with a New License File: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Moving the Network License Manager to a New Server: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Troubleshooting Network Licensing: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. Contacting Support: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Setting up Network Licensing for the First Time:</h3>
            <ol>
              <p><strong>1. </strong> Install the Network License Manager</p>
              <p><strong>2. </strong> Gather Information</p>
              <p><strong>3. </strong> Get a License File</p>
              <p><strong>4. </strong> Configure the Service</p>
              <p><strong>5. </strong> Start the Service</p>
              <p><strong>6. </strong> Check Server Status</p>
              <p><strong>7. </strong> Verify Connection to a Local Machine</p>
            </ol>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Updating Network Licensing with a New License File:</h3>
              <p><strong>1. </strong> Gather Information</p>
              <p><strong>2. </strong> Get a License File</p>
              <p><strong>3. </strong> Combine License Files</p>
              <p><strong>4. </strong> Upgrade LMTools</p>
              <p><strong>5. </strong> Configure the Service</p>
              <p><strong>6. </strong> Start the Service</p>
              <p><strong>7. </strong> Check Server Status</p>
              <p><strong>8. </strong> Verify Connection to Local Machine</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Moving the Network License Manager to a New Server:</h3>
            <p>(Use this process when moving the network licensing to a new server. Some steps will)</p>
            
              <p><strong>1. </strong> Follow steps 1.1-1.6.</p>
              <p><strong>2. </strong> Set the Local Workstations to Look at the New Server</p>
              <p><strong>3. </strong> Verify Connection to Local Machine</p>
            
            
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Troubleshooting Network Licensing:</h3>
            
              <p><strong>1. </strong> Increasing the Time a Workstation Looks for a License</p>
              <p><strong>2. </strong> Server is Not Started Correctly, License File Failed to be Read</p>
              <p><strong>3. </strong> User(s) Are Unable to Get a License</p>
              <p><strong>4. </strong> Installing Alongside an Existing Licensing Service</p>
            
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. Contacting Support:</h3>
            <p>Helpful Information to Include When Contacting Your Reseller or Autodesk for Support.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


