
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
      <p className='main-para mb-2'>Following are some important benefits of Private Limited Company Compliance in India:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Helps to attract investors</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Helps to maintain the active status of your company</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Credibility</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Provide Financial Assistance</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1. Helps to attract investors:</h3>
            <p>
              Financial records & compliance are the main points of focus with regard to investors. Before investing in your business, investors check the regularity of filing annual returns on the MCA portal. Hence, regular filing of Private Limited Company Compliance is an important part of getting investors.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2. Helps to maintain the active status of your company:</h3>
            <p>
              Filing annual compliance for a Private Limited Company on time is vital to avoid penalties on accounting services. Failure to file may also reduce the business or company status. Furthermore, the Company will also be declared “in-operational” & removed from ROC. Such Companies’ Directors are debarred from all future businesses in India.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3. Credibility:</h3>
            <p>
              The date of filing Private Limited Company Compliance is shown on the MCA portal. Thus, regularity in filing compliance increases your business credibility, attracting customers, helping obtain Government Tenders & attaining loan approvals.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4. Provide Financial Assistance:</h3>
            <p>
              The financial department of a business must meet several standards in terms of taxes and accounting. Failure to meet such standards not only leads to losses but also legal issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
