import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/Types_of_E-Waste.svg'
interface HeroProps {
    cityName: string;
}
export const TypeOF = ({ cityName }: HeroProps) => {
  return (
    <div id='TypeOF'>
      
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      
      <div className='flex-7 pt-5'>
      <p><strong>1: </strong>Monitors & Laptop</p>
      <p><strong>2: </strong>Personal Electronic Devices</p>
      <p><strong>3: </strong>Headphones, keyboard & Mouse</p>
      <p><strong>4: </strong>Television</p>
      <p><strong>5: </strong>Audio/video Gadgets</p>
      <p><strong>6: </strong>Call Phones</p>
      <p><strong>7: </strong>Scanners & Printers</p>
      <p><strong>8: </strong>Camera & Lenses</p>
      </div>
      <div className='flex-4 '>
          <Image alt="Types of E-Waste" className="TypeOF-img w-100" height={450} loading="lazy" src={bft} />

      </div>
     </div>
    </div>
  )
}
