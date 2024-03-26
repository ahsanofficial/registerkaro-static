import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/shop-and-establishment-act-registration/What_are_the_various_regulations.svg'
interface HeroProps {
    cityName: string;
}
export const WhatRegulations = ({ cityName }: HeroProps) => {
  return (
    <div id='WhatRegulations'>
       <p className='main-para'>Following are the regulations under the Shop and Establishment Act:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 '>
          <Image alt="What are the various regulations under the Shop and Establishment Act?" className="WhatRegulations-img w-100" height={550} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
     
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
     </div>

  )
}
