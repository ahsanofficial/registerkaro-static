import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Benefits = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
      <p>Following are the benefits of Trademark Registration Online in India:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
         <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Gives Exclusive Rights:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Provides Unique Identity:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>It Protects, Builds Commercial Goodwill:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Legal Protection:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Creation of an Asset:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
      </div>

      <div className='flex-6 text-justify fs-20 p-color-black'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <h3>1. Gives Exclusive Rights:</h3>
          <p>   The actual owner of a registered Trademark will be able to have exclusive rights over their Trademark. The same Trademark can be applied by the Trademark Owner for all the products that come under the same classes. With these rights on the products or services permit the Trademark Owner to stop any type of unauthorized use of the registered Trademark.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <h3>2. Provides Unique Identity:</h3>
          <p>Customers will recognize the product or service only with the brand name or Trademark. Registering a Trademark guarantees that competitors will not apply it & so it remains a Company’s distinctive asset.</p>
        </div>
        <div className={`${active === '3' ? 'active' : 'none'}`}>
          <h3>3. It Protects, Builds Commercial Goodwill:</h3>
          <p>An owner of a registered Trademark has the ability to build & protect the goodwill of their products or services. The Trademark owner can stop other traders from using their trademark illegally. The owner can also sue the infringer for using the brand name & demand damages for any infringement.</p>
        </div>
        <div className={`${active === '4' ? 'active' : 'none'}`}>
          <h3>4. Legal Protection:</h3>
          <p>An owner of a registered Trademark has the legal right to sue anyone in case of infringement.</p>
        </div>
        <div className={`${active === '5' ? 'active' : 'none'}`}>
          <h3>5. Creation of an Asset:</h3>
          <p>Trademark Registration creates an intangible asset and registered Trademark can be assigned, sold, franchised, or commercially contracted to bring benefits to the Company or the owner.</p>
        </div>
       
      </div>
      </div>
     
    </div>
  )
}