import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
     <p className='main-para mb-2'>EPFO stands for Employees’ Provident Fund Organisation and is a non-constitutional body that promotes employees to save funds for retirement and this organisation is governed by the Ministry of Labor & Employment, Government of India & was launched in 1951.</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="Benefits-img w-100" height={350} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 pt-5'>
      <p><strong>The following are the objectives of EPFO in India:</strong></p>
      <p>1: To make sure that every employee has only 1 EPF Account;</p>
      <p>2: To ensure that online services are reliable and trustworthy & to make improvements in their facilities;</p>
      <p>3: Encouragement & promotion of voluntary compliance;</p>
      <p>4: Ensure that organisations follow all the rules & regulations laid out by the EPFO on a regular basis;</p>
      <p>5: Compliance must be provided easily;</p>
      <p>6: Claim settlements are to be reduced from 30 days to 3 days only;</p>
      <p>7: For all EPF member accounts to be accessed online easily.</p>
      </div>
     </div>
      </div>
  )
}
