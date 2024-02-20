import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DifferentTypes = () => {
  return (
    <div >
      <div className='flex justify-content-center' id='DifferentTypes'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={482} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>Following is the list of different types of EPF Forms:</p>
        <h3>Form 10D:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This form is basically used for availing of a monthly pension.</li>
        </ul>
        <h3>Form 10C:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This is used to claim benefits under the EPF Scheme and this form is used to withdraw the funds that the employer contributes towards EPS.</li>
        </ul>
        <h3>Form 13:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Form 13 is used to transfer your PF account from the last job to your current job and this helps in keeping all the PF money under one account.</li>
        </ul>
        <h3>Form 19:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This form is used to claim the final settlement of the EPF Account.</li>
        </ul>
        <h3>Form 20:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Family members can use Form 20 to withdraw the PF amount in case the account holder passes away.</li>
        </ul>
        <h3>Form 31:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />It’s also known as the PF Advance Form and it can be used for getting loans, advances & withdrawals from the EPF Account.</li>
        </ul>
        <h3>Form 51F:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This form is used by a nominee to claim the benefits of the EDLI.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}