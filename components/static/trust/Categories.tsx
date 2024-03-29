import Image from 'next/image'
import React from 'react'
import categories_of_trusts_in_india from '../../../assets/images/static/trust-registration/categories_of_trusts_in_india.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps { cityName: string;}
export const Categories = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='Categories'>
       <div className='flex-3'>
        <Image alt="Categories of Trusts in India,Public trusts are established to benefit the general public. They often focus on charitable, educational, and religious purposes, Private trusts are established to carry out activities for specific individuals" className="Categories-img w-100" loading="lazy" src={categories_of_trusts_in_india} height={450} />
        </div>
      <div className='flex-7'>
       
        <p>Trusts can be categorized into various types based on the nature of their activities. Here is an overview of different types of trusts::</p>
      
        <h3>1. Public Trust:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Public trusts are established to benefit the general public. They often focus on charitable, educational, and religious purposes. The governance of public trusts is guided by specific statutes such as the Religious Endowments Act of 1863, the Charitable and Religious Trust Act of 1920, or the Bombay Public Trust Act of 1950. Charitable and religious trusts are prevalent examples of public trusts in {cityName}.</li>
        </ul>
        
        <h3>2. Private Trust:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Private trusts are established to carry out activities for specific individuals, families, or close associates. These trusts can have beneficiaries closely related to the trust’s founders and are governed by The Trusts Act of 1882.</li>
        </ul>
        <h3>2. Public Cum-Private Trust:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This type of trust serves both public and private purposes. It can utilize its income for the benefit of the public and specific individuals or families. The beneficiaries of a public cum-private trust can be a combination of public and private individuals.</li>
        </ul>
    </div>
       
    </div>
  )
}