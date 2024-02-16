import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/fssai/DocsRequire.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const KeyInitiatives = () => {
  return (
    <div id='KeyInitiatives' >
        <p className='main-para'>Following is the online step-by-step procedure for IEC Registration in India:</p>
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
     <div className='flex justify-content-center' id='KeyInitiatives'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={382} loading="lazy" src={dft} />
      </div>
      <div className='flex-7'>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />First, you need to visit the official website of DGFT for IEC Registration in India.</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Then, you need to register by creating a new account by providing your basic details like name, address, mobile number & email.</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Once you created your account, then you have to log in by using your registered email id and password.</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />After that, you need to file the application form online and you need to enter all the vital details and upload all the documents.</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />After filing, you need to pay the IEC application fee online.</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />After submitting the application, you can track the application status online. Once the IEC is issued, you will get an IEC Certificate on your registered mail id.</li>
          </ul>
      </div>
     
      </div>
    </div>
  )
}