
import Image from 'next/image'
import { useState } from 'react'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Procedure = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Procedure'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1.</h3>
            <p className='mb-0'> Application for the certificate of origin under GSP is processed through the DGFT electronic platform www.coo.dgft.gov.in.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2.</h3>
            <p className='mb-0'>Select "Online Application for Certificate of Origin" from the menu. Under the relevant options, choose:
            </p>
            <p><strong>1. </strong>Preferential Scheme</p>
            <p><strong>2. </strong>Free Trade Agreement – Generalized System of Preferences (GSP)</p>
            <p><strong>3. </strong>Select Type of COO - Normal CoO</p>
            <p><strong>4. </strong>Issuing Agencies - Noida Special Economic Zone</p>
            <p><strong>5. </strong>Regional Office – Noida Special Economic Zone</p>
            <p><strong>6. </strong>Exporter Details – as per details of exports</p>
            <p><strong>7. </strong>Product Details – including HS code of exports</p>
            <p><strong>8. </strong>Raw Material – details of inputs. Indicate the country of origin as the country where the basic raw materials are sourced, irrespective of whether they are domestically sourced or not.</p>
            <p><strong>9. </strong>Description of goods – details of the exported good</p>
            <p><strong>10. </strong>Mandatory document to be uploaded: Commercial invoice</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3.</h3>
            <p className='mb-0'>Additional documents required when applying to the Noida SEZ office for the certificate of origin include:
            </p>
            <p><strong>1. </strong>Export product-wise format (sample annex provided for two export products)</p>
            <p><strong>2. </strong>Shipping Bill of export indicating the value</p>
            <p><strong>3. </strong>Bill of entry of materials if directly imported into the SEZ. Alternatively, provide proof such as invoice value/bill of export for procurement from DTA.</p>            
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Hearing: </h3>
            <p className='mb-0'>The Noida SEZ office will issue the certificate of origin within 1 working day upon receipt of the completed form and documents.
            </p>
            
          </div>
        </div>
        
      </div>
    </div>
  )
  
}


