import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const KeyInitiatives = () => {
  return (
    <div >
      <div className='flex justify-content-center' id='KeyInitiatives'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={482} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The following are the benefits of EPF Registration in India:</p>
        <h3>Long-term goals:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Long-term goals like marriage or higher education, necessitate the immediate availability of funds. During such times, the accumulated Provident Fund amount is frequently useful.</li>
          </ul>
        <h3>EDLI Scheme:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Employee Deposit Linked Insurance Scheme or EDLI Scheme is available to all PF account holders. As per this, the life insurance premium is deducted at the rate of 0.5% of the salary.</li>
          </ul>
        <h3>Risk Coverage:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />One of the main benefits of EPF Registration is that it covers the risks that employees & their dependents may face as a result of illness, death, or retirement.</li>
          </ul>
        <h3>Pension Coverage:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Apart from the employee’s contribution to EPF, the employer contributes an equal amount, which includes 8.33% to the EPF.</li>
          </ul>
        <h3>Need in Emergency:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Some unexpected events like marriage or other family gatherings and any mishap/illness, necessitate quick financial help, the Provident Fund amount can be extremely beneficial.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}