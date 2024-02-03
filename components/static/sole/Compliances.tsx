
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Compliances = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Compliances'>
      <p className='main-para mb-0'>The following are some vital compliances for Sole Proprietorship in India:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="one" loading="lazy" width={30} height={30} /> &nbsp; Filing ITR
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="two" loading="lazy" width={30} height={30} /> &nbsp; GST Return Filing
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /> &nbsp; Business Income
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={four} alt="four" loading="lazy" width={30} height={30} /> &nbsp; TDS Returns
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
        </div>
        <div className='flex-5 text-justify fs-20'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <p>
            The owner of a Proprietorship will have to file ITR using ITR-3 & 4.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <p>
            In case the Proprietorship has GST Registration, GST returns must be filed every month as per the Scheme under which the business is registered.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <p>
            Once your Company Name is approved, then the next step is to prepare all the vital documents for Company Registration. At this step, MOnly ITR Forms allow for declaring business income. Hence, all proprietorships will have to file ITR forms to be compliant with the Income Tax Regulations.
            </p>
          </div> 
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <p>
            If the Proprietorship has employees or purchases products or services beyond a certain threshold, then tax must be deducted & TDS returns must be filed every quarter.
            </p>
          </div>
        </div>
      </div>
       <h3>Note: Additionally, various other compliance requirements may be applicable to the Proprietorship based on location & industry</h3>
    </div>
  )
}
