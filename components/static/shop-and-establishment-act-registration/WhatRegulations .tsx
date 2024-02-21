import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const WhatRegulations = () => {
  return (

    <div className='benefits flex w-80 m-auto mobile-flex-column' id='WhatRegulations'>
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="WhatRegulations-img w-100" height={350} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p>Following are the regulations under the Shop and Establishment Act:</p>
      <p>1: Inspection & Enforcement;</p>
      <p>2: Record keeping by the employers;</p>
      <p>3: Prohibition of employment of children;</p>
      <p>4: Dismissal Provisions;</p>
      <p>5: Working hours, annual leave, weekly holidays;</p>
      <p>6: Interval for rest;</p>
      <p>7: Prohibition of employing women & young individuals in the night shift;</p>
      <p>8: Payment of wages & compensation;</p>
      <p>9: Opening & closing hours.</p>
      </div>
     </div>

  )
}
