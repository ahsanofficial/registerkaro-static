import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const ProcedureShop = () => {
  return (
    <div >
      <div className='flex justify-content-center' id='ProcedureShop'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="ProcedureShop-img w-100" height={482} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p className='main-para'>The complete process for getting the Shop and Establishment Registration Certificate differs from state to state and it can be obtained offline or online.</p>
     
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />For getting the Shop and Establishment Act Registration Certificate online, the owner/proprietor of the shop or business must log into the website of the respective State Labour Department.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The owner/proprietor must fill the application for the Shop and Establishment Act Registration, upload the documents & pay the prescribed fees, also the prescribed fees differ from state to state.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Once the application form for the Registration is approved, the Shop and Establishment Act Registration Certificate will be issued online to the business owner or proprietor.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />For obtaining the Certificate offline, the application is to be filled & submitted to the Chief Inspector of the concerned area along with the fees. Then, the Chief Inspector will issue the Certificate to the business owner after being satisfied with the correctness of the application.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The application form contains the information related to the employer’s name & establishment, complete address & category of the establishment, no. of employees & other vital details as needed.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The application needs to be renewed before the expiry of the Registration Certificate.</li>
        </ul>
       
      </div>
      </div>
      <p className='main-para'><strong>Note:</strong> The validity of the Shop and Establishment Registration Certificate differs from state to state and some states provide the Registration Certificate valid for a lifetime, while other states provide the Registration Certificate valid for 1 to 5 years.</p>
    </div>
  )
}